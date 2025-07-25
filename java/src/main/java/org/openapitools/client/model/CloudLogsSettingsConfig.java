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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
 * Google Cloud Logs settings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class CloudLogsSettingsConfig {
  public static final String SERIALIZED_NAME_ENABLE_PROTO_PAYLOAD_PARSING = "enable_proto_payload_parsing";
  @SerializedName(SERIALIZED_NAME_ENABLE_PROTO_PAYLOAD_PARSING)
  @javax.annotation.Nullable
  private Boolean enableProtoPayloadParsing;

  public static final String SERIALIZED_NAME_FILTER = "filter";
  @SerializedName(SERIALIZED_NAME_FILTER)
  @javax.annotation.Nullable
  private String filter;

  public static final String SERIALIZED_NAME_RESOURCE_NAMES = "resource_names";
  @SerializedName(SERIALIZED_NAME_RESOURCE_NAMES)
  @javax.annotation.Nullable
  private List<String> resourceNames = new ArrayList<>();

  public CloudLogsSettingsConfig() {
  }

  public CloudLogsSettingsConfig enableProtoPayloadParsing(@javax.annotation.Nullable Boolean enableProtoPayloadParsing) {
    this.enableProtoPayloadParsing = enableProtoPayloadParsing;
    return this;
  }

  /**
   * Enables automatic parsing of embedded protocol buffer payloads within the input.
   * @return enableProtoPayloadParsing
   */
  @javax.annotation.Nullable
  public Boolean getEnableProtoPayloadParsing() {
    return enableProtoPayloadParsing;
  }

  public void setEnableProtoPayloadParsing(@javax.annotation.Nullable Boolean enableProtoPayloadParsing) {
    this.enableProtoPayloadParsing = enableProtoPayloadParsing;
  }


  public CloudLogsSettingsConfig filter(@javax.annotation.Nullable String filter) {
    this.filter = filter;
    return this;
  }

  /**
   * The filter to apply to the logs.
   * @return filter
   */
  @javax.annotation.Nullable
  public String getFilter() {
    return filter;
  }

  public void setFilter(@javax.annotation.Nullable String filter) {
    this.filter = filter;
  }


  public CloudLogsSettingsConfig resourceNames(@javax.annotation.Nullable List<String> resourceNames) {
    this.resourceNames = resourceNames;
    return this;
  }

  public CloudLogsSettingsConfig addResourceNamesItem(String resourceNamesItem) {
    if (this.resourceNames == null) {
      this.resourceNames = new ArrayList<>();
    }
    this.resourceNames.add(resourceNamesItem);
    return this;
  }

  /**
   * The resources to query logs from.
   * @return resourceNames
   */
  @javax.annotation.Nullable
  public List<String> getResourceNames() {
    return resourceNames;
  }

  public void setResourceNames(@javax.annotation.Nullable List<String> resourceNames) {
    this.resourceNames = resourceNames;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CloudLogsSettingsConfig cloudLogsSettingsConfig = (CloudLogsSettingsConfig) o;
    return Objects.equals(this.enableProtoPayloadParsing, cloudLogsSettingsConfig.enableProtoPayloadParsing) &&
        Objects.equals(this.filter, cloudLogsSettingsConfig.filter) &&
        Objects.equals(this.resourceNames, cloudLogsSettingsConfig.resourceNames);
  }

  @Override
  public int hashCode() {
    return Objects.hash(enableProtoPayloadParsing, filter, resourceNames);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CloudLogsSettingsConfig {\n");
    sb.append("    enableProtoPayloadParsing: ").append(toIndentedString(enableProtoPayloadParsing)).append("\n");
    sb.append("    filter: ").append(toIndentedString(filter)).append("\n");
    sb.append("    resourceNames: ").append(toIndentedString(resourceNames)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("enable_proto_payload_parsing", "filter", "resource_names"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to CloudLogsSettingsConfig
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CloudLogsSettingsConfig.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CloudLogsSettingsConfig is not found in the empty JSON string", CloudLogsSettingsConfig.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CloudLogsSettingsConfig.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CloudLogsSettingsConfig` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("filter") != null && !jsonObj.get("filter").isJsonNull()) && !jsonObj.get("filter").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `filter` to be a primitive type in the JSON string but got `%s`", jsonObj.get("filter").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("resource_names") != null && !jsonObj.get("resource_names").isJsonNull() && !jsonObj.get("resource_names").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `resource_names` to be an array in the JSON string but got `%s`", jsonObj.get("resource_names").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!CloudLogsSettingsConfig.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CloudLogsSettingsConfig' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CloudLogsSettingsConfig> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CloudLogsSettingsConfig.class));

       return (TypeAdapter<T>) new TypeAdapter<CloudLogsSettingsConfig>() {
           @Override
           public void write(JsonWriter out, CloudLogsSettingsConfig value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CloudLogsSettingsConfig read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of CloudLogsSettingsConfig given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of CloudLogsSettingsConfig
   * @throws IOException if the JSON string is invalid with respect to CloudLogsSettingsConfig
   */
  public static CloudLogsSettingsConfig fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CloudLogsSettingsConfig.class);
  }

  /**
   * Convert an instance of CloudLogsSettingsConfig to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

