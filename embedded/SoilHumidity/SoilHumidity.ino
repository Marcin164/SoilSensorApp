#include <WiFi.h>
#include <HTTPClient.h>
#include <Arduino_JSON.h>
#include <WebSocketClient.h>

int humidityPin = 25; 
int temperaturePin = 26;

void setup() {
  Serial.begin(9600);
  WiFi.begin("N_Siedlisko", "Xy@U8pd91");
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println("Connected to the WiFi");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    
  }
  delay(5000);
}

int readHumidityFromSensor() {
  int humidity = analogRead(humidityPin);
  return humidity;
}
