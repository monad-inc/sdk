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
 * Socket Full Scans settings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class FullScansSettingsConfig {
  public static final String SERIALIZED_NAME_ORG_SLUG = "org_slug";
  @SerializedName(SERIALIZED_NAME_ORG_SLUG)
  @javax.annotation.Nullable
  private String orgSlug;

  public static final String SERIALIZED_NAME_REPO = "repo";
  @SerializedName(SERIALIZED_NAME_REPO)
  @javax.annotation.Nullable
  private String repo;

  public FullScansSettingsConfig() {
  }

  public FullScansSettingsConfig orgSlug(@javax.annotation.Nullable String orgSlug) {
    this.orgSlug = orgSlug;
    return this;
  }

  /**
   * Cron expression for scheduling the input
   * @return orgSlug
   */
  @javax.annotation.Nullable
  public String getOrgSlug() {
    return orgSlug;
  }

  public void setOrgSlug(@javax.annotation.Nullable String orgSlug) {
    this.orgSlug = orgSlug;
  }


  public FullScansSettingsConfig repo(@javax.annotation.Nullable String repo) {
    this.repo = repo;
    return this;
  }

  /**
   * A repository slug to filter full-scans by.
   * @return repo
   */
  @javax.annotation.Nullable
  public String getRepo() {
    return repo;
  }

  public void setRepo(@javax.annotation.Nullable String repo) {
    this.repo = repo;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FullScansSettingsConfig fullScansSettingsConfig = (FullScansSettingsConfig) o;
    return Objects.equals(this.orgSlug, fullScansSettingsConfig.orgSlug) &&
        Objects.equals(this.repo, fullScansSettingsConfig.repo);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orgSlug, repo);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FullScansSettingsConfig {\n");
    sb.append("    orgSlug: ").append(toIndentedString(orgSlug)).append("\n");
    sb.append("    repo: ").append(toIndentedString(repo)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("org_slug", "repo"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to FullScansSettingsConfig
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!FullScansSettingsConfig.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in FullScansSettingsConfig is not found in the empty JSON string", FullScansSettingsConfig.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!FullScansSettingsConfig.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `FullScansSettingsConfig` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("org_slug") != null && !jsonObj.get("org_slug").isJsonNull()) && !jsonObj.get("org_slug").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `org_slug` to be a primitive type in the JSON string but got `%s`", jsonObj.get("org_slug").toString()));
      }
      if ((jsonObj.get("repo") != null && !jsonObj.get("repo").isJsonNull()) && !jsonObj.get("repo").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `repo` to be a primitive type in the JSON string but got `%s`", jsonObj.get("repo").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!FullScansSettingsConfig.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'FullScansSettingsConfig' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<FullScansSettingsConfig> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(FullScansSettingsConfig.class));

       return (TypeAdapter<T>) new TypeAdapter<FullScansSettingsConfig>() {
           @Override
           public void write(JsonWriter out, FullScansSettingsConfig value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public FullScansSettingsConfig read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of FullScansSettingsConfig given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of FullScansSettingsConfig
   * @throws IOException if the JSON string is invalid with respect to FullScansSettingsConfig
   */
  public static FullScansSettingsConfig fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, FullScansSettingsConfig.class);
  }

  /**
   * Convert an instance of FullScansSettingsConfig to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

