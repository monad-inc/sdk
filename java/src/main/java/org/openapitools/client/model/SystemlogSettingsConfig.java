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
 * Okta system log settings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class SystemlogSettingsConfig {
  public static final String SERIALIZED_NAME_ORG_URL = "org_url";
  @SerializedName(SERIALIZED_NAME_ORG_URL)
  @javax.annotation.Nullable
  private String orgUrl;

  public SystemlogSettingsConfig() {
  }

  public SystemlogSettingsConfig orgUrl(@javax.annotation.Nullable String orgUrl) {
    this.orgUrl = orgUrl;
    return this;
  }

  /**
   * The URL of the Okta organization
   * @return orgUrl
   */
  @javax.annotation.Nullable
  public String getOrgUrl() {
    return orgUrl;
  }

  public void setOrgUrl(@javax.annotation.Nullable String orgUrl) {
    this.orgUrl = orgUrl;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SystemlogSettingsConfig systemlogSettingsConfig = (SystemlogSettingsConfig) o;
    return Objects.equals(this.orgUrl, systemlogSettingsConfig.orgUrl);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orgUrl);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SystemlogSettingsConfig {\n");
    sb.append("    orgUrl: ").append(toIndentedString(orgUrl)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("org_url"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to SystemlogSettingsConfig
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!SystemlogSettingsConfig.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in SystemlogSettingsConfig is not found in the empty JSON string", SystemlogSettingsConfig.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!SystemlogSettingsConfig.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `SystemlogSettingsConfig` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("org_url") != null && !jsonObj.get("org_url").isJsonNull()) && !jsonObj.get("org_url").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `org_url` to be a primitive type in the JSON string but got `%s`", jsonObj.get("org_url").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!SystemlogSettingsConfig.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'SystemlogSettingsConfig' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<SystemlogSettingsConfig> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(SystemlogSettingsConfig.class));

       return (TypeAdapter<T>) new TypeAdapter<SystemlogSettingsConfig>() {
           @Override
           public void write(JsonWriter out, SystemlogSettingsConfig value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public SystemlogSettingsConfig read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of SystemlogSettingsConfig given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of SystemlogSettingsConfig
   * @throws IOException if the JSON string is invalid with respect to SystemlogSettingsConfig
   */
  public static SystemlogSettingsConfig fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, SystemlogSettingsConfig.class);
  }

  /**
   * Convert an instance of SystemlogSettingsConfig to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

