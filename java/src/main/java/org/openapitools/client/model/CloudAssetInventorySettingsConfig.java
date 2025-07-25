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
 * Google Cloud Asset Inventory settings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class CloudAssetInventorySettingsConfig {
  public static final String SERIALIZED_NAME_ASSET_TYPES = "asset_types";
  @SerializedName(SERIALIZED_NAME_ASSET_TYPES)
  @javax.annotation.Nullable
  private List<String> assetTypes = new ArrayList<>();

  public static final String SERIALIZED_NAME_CRON = "cron";
  @SerializedName(SERIALIZED_NAME_CRON)
  @javax.annotation.Nullable
  private String cron;

  public static final String SERIALIZED_NAME_RESOURCE_NAMES = "resource_names";
  @SerializedName(SERIALIZED_NAME_RESOURCE_NAMES)
  @javax.annotation.Nullable
  private List<String> resourceNames = new ArrayList<>();

  public CloudAssetInventorySettingsConfig() {
  }

  public CloudAssetInventorySettingsConfig assetTypes(@javax.annotation.Nullable List<String> assetTypes) {
    this.assetTypes = assetTypes;
    return this;
  }

  public CloudAssetInventorySettingsConfig addAssetTypesItem(String assetTypesItem) {
    if (this.assetTypes == null) {
      this.assetTypes = new ArrayList<>();
    }
    this.assetTypes.add(assetTypesItem);
    return this;
  }

  /**
   * The type of assets to scan for.  If left empty, will scan all assets
   * @return assetTypes
   */
  @javax.annotation.Nullable
  public List<String> getAssetTypes() {
    return assetTypes;
  }

  public void setAssetTypes(@javax.annotation.Nullable List<String> assetTypes) {
    this.assetTypes = assetTypes;
  }


  public CloudAssetInventorySettingsConfig cron(@javax.annotation.Nullable String cron) {
    this.cron = cron;
    return this;
  }

  /**
   * Cron expression for scheduling the input
   * @return cron
   */
  @javax.annotation.Nullable
  public String getCron() {
    return cron;
  }

  public void setCron(@javax.annotation.Nullable String cron) {
    this.cron = cron;
  }


  public CloudAssetInventorySettingsConfig resourceNames(@javax.annotation.Nullable List<String> resourceNames) {
    this.resourceNames = resourceNames;
    return this;
  }

  public CloudAssetInventorySettingsConfig addResourceNamesItem(String resourceNamesItem) {
    if (this.resourceNames == null) {
      this.resourceNames = new ArrayList<>();
    }
    this.resourceNames.add(resourceNamesItem);
    return this;
  }

  /**
   * The names of the resources to scan. can be organizations, projects or folders.
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
    CloudAssetInventorySettingsConfig cloudAssetInventorySettingsConfig = (CloudAssetInventorySettingsConfig) o;
    return Objects.equals(this.assetTypes, cloudAssetInventorySettingsConfig.assetTypes) &&
        Objects.equals(this.cron, cloudAssetInventorySettingsConfig.cron) &&
        Objects.equals(this.resourceNames, cloudAssetInventorySettingsConfig.resourceNames);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assetTypes, cron, resourceNames);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CloudAssetInventorySettingsConfig {\n");
    sb.append("    assetTypes: ").append(toIndentedString(assetTypes)).append("\n");
    sb.append("    cron: ").append(toIndentedString(cron)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("asset_types", "cron", "resource_names"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to CloudAssetInventorySettingsConfig
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CloudAssetInventorySettingsConfig.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CloudAssetInventorySettingsConfig is not found in the empty JSON string", CloudAssetInventorySettingsConfig.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CloudAssetInventorySettingsConfig.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CloudAssetInventorySettingsConfig` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the optional json data is an array if present
      if (jsonObj.get("asset_types") != null && !jsonObj.get("asset_types").isJsonNull() && !jsonObj.get("asset_types").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `asset_types` to be an array in the JSON string but got `%s`", jsonObj.get("asset_types").toString()));
      }
      if ((jsonObj.get("cron") != null && !jsonObj.get("cron").isJsonNull()) && !jsonObj.get("cron").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `cron` to be a primitive type in the JSON string but got `%s`", jsonObj.get("cron").toString()));
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
       if (!CloudAssetInventorySettingsConfig.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CloudAssetInventorySettingsConfig' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CloudAssetInventorySettingsConfig> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CloudAssetInventorySettingsConfig.class));

       return (TypeAdapter<T>) new TypeAdapter<CloudAssetInventorySettingsConfig>() {
           @Override
           public void write(JsonWriter out, CloudAssetInventorySettingsConfig value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CloudAssetInventorySettingsConfig read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of CloudAssetInventorySettingsConfig given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of CloudAssetInventorySettingsConfig
   * @throws IOException if the JSON string is invalid with respect to CloudAssetInventorySettingsConfig
   */
  public static CloudAssetInventorySettingsConfig fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CloudAssetInventorySettingsConfig.class);
  }

  /**
   * Convert an instance of CloudAssetInventorySettingsConfig to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

