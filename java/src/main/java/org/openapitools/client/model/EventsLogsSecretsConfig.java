/*
 * Monad API
 * This is the monad API
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.Arrays;
import org.openapitools.client.model.ModelsSecret;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * Tines Events Logs secrets
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class EventsLogsSecretsConfig {
  public static final String SERIALIZED_NAME_API_KEY = "api_key";
  @SerializedName(SERIALIZED_NAME_API_KEY)
  @javax.annotation.Nullable
  private ModelsSecret apiKey;

  public EventsLogsSecretsConfig() {
  }

  public EventsLogsSecretsConfig apiKey(@javax.annotation.Nullable ModelsSecret apiKey) {
    this.apiKey = apiKey;
    return this;
  }

  /**
   * Get apiKey
   * @return apiKey
   */
  @javax.annotation.Nullable
  public ModelsSecret getApiKey() {
    return apiKey;
  }

  public void setApiKey(@javax.annotation.Nullable ModelsSecret apiKey) {
    this.apiKey = apiKey;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EventsLogsSecretsConfig eventsLogsSecretsConfig = (EventsLogsSecretsConfig) o;
    return Objects.equals(this.apiKey, eventsLogsSecretsConfig.apiKey);
  }

  @Override
  public int hashCode() {
    return Objects.hash(apiKey);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EventsLogsSecretsConfig {\n");
    sb.append("    apiKey: ").append(toIndentedString(apiKey)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>(Arrays.asList("api_key"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to EventsLogsSecretsConfig
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!EventsLogsSecretsConfig.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in EventsLogsSecretsConfig is not found in the empty JSON string", EventsLogsSecretsConfig.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!EventsLogsSecretsConfig.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `EventsLogsSecretsConfig` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // validate the optional field `api_key`
      if (jsonObj.get("api_key") != null && !jsonObj.get("api_key").isJsonNull()) {
        ModelsSecret.validateJsonElement(jsonObj.get("api_key"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!EventsLogsSecretsConfig.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'EventsLogsSecretsConfig' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<EventsLogsSecretsConfig> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(EventsLogsSecretsConfig.class));

       return (TypeAdapter<T>) new TypeAdapter<EventsLogsSecretsConfig>() {
           @Override
           public void write(JsonWriter out, EventsLogsSecretsConfig value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public EventsLogsSecretsConfig read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of EventsLogsSecretsConfig given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of EventsLogsSecretsConfig
   * @throws IOException if the JSON string is invalid with respect to EventsLogsSecretsConfig
   */
  public static EventsLogsSecretsConfig fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, EventsLogsSecretsConfig.class);
  }

  /**
   * Convert an instance of EventsLogsSecretsConfig to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

