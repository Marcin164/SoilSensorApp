#include <PubSubClient.h>
#include <WiFi.h>
#define temperaturePin 26

const char* ssid = "PLAY internet 2.4GHz_5E08";
const char* password = "f1pv45128dnd";
const char* mqttServer = "06e64ea57bd04b0bb17aec4f7e141daf.s1.eu.hivemq.cloud";
const int mqttPort = 8883;
const char* topic = "data_queue";
const char* mqttId = "client1";
const char* mqttUser = "esp32client";
const char* mqttPassword = "Mn_12345";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  delay(10);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    WiFi.begin(ssid, password);
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
  Serial.println(WiFi.localIP());

  client.setServer(mqttServer, mqttPort);

  Serial.println("Server has been created");
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");
    String clientId = "ESP8266Client - MyClient";
    
    if (client.connect(clientId.c_str(), "esp32client", "Mn_12345")) {
      // client.subscribe(topic);
      Serial.println("Connected to MQTT broker");
    } else {
      Serial.print("Failed to connect to MQTT broker, rc=");
      Serial.println(client.state());
      delay(2000);
    }
  }

  client.subscribe(topic);
}

void loop() {
  client.loop();
  float temperature = getTemperature();

  String packet = "";
  packet.concat(("{\"temperature\":"));
  packet.concat(temperature);
  packet.concat("}");

  client.publish(topic, packet.c_str());
}

float getTemperature() {
  Serial.println(digitalRead(temperaturePin));
  return digitalRead(temperaturePin);
}
