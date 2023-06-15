#include <WiFi.h>
#include <PubSubClient.h>
#define temperaturePin 22

const char* ssid = "N_Siedlisko";
const char* password = "Xy@U8pd91";
const char* mqttServer = "MQTTBrokerIP";
const int mqttPort = 1883;
const char* mqttTopic = "your/topic";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  pinMode(temperaturePin, INPUT)

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");

  client.setServer(mqttServer, mqttPort);
  while (!client.connected()) {
    Serial.println("Connecting to MQTT Broker...");`
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT Broker");
      client.subscribe(mqttTopic);
    } else {
      Serial.print("Failed to connect to MQTT Broker. Retrying in 5 seconds...");
      delay(5000);
    }
  }
}

void loop() {
  client.loop();
  client.publish(mqttTopic, {temperature: getTemperature()});
}

float getTemperature() {
  Serial.println(digitalRead(temperaturePin))
  return digitalRead(temperaturePin)
}
