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
 * Elasticsearch Output Settings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class ElasticsearchSettingsConfig {
  public static final String SERIALIZED_NAME_AUTH_TYPE = "auth_type";
  @SerializedName(SERIALIZED_NAME_AUTH_TYPE)
  @javax.annotation.Nullable
  private String authType;

  public static final String SERIALIZED_NAME_CLOUD_ID = "cloud_id";
  @SerializedName(SERIALIZED_NAME_CLOUD_ID)
  @javax.annotation.Nullable
  private String cloudId;

  public static final String SERIALIZED_NAME_CONNECTION_TYPE = "connection_type";
  @SerializedName(SERIALIZED_NAME_CONNECTION_TYPE)
  @javax.annotation.Nullable
  private String connectionType;

  public static final String SERIALIZED_NAME_INDEX = "index";
  @SerializedName(SERIALIZED_NAME_INDEX)
  @javax.annotation.Nullable
  private String index;

  public static final String SERIALIZED_NAME_INSECURE_SKIP_VERIFY = "insecure_skip_verify";
  @SerializedName(SERIALIZED_NAME_INSECURE_SKIP_VERIFY)
  @javax.annotation.Nullable
  private Boolean insecureSkipVerify;

  public static final String SERIALIZED_NAME_URL = "url";
  @SerializedName(SERIALIZED_NAME_URL)
  @javax.annotation.Nullable
  private String url;

  public static final String SERIALIZED_NAME_USERNAME = "username";
  @SerializedName(SERIALIZED_NAME_USERNAME)
  @javax.annotation.Nullable
  private String username;

  public ElasticsearchSettingsConfig() {
  }

  public ElasticsearchSettingsConfig authType(@javax.annotation.Nullable String authType) {
    this.authType = authType;
    return this;
  }

  /**
   * The method of authentication to use with the Elasticsearch cluster. Choose between &#39;api_key&#39; or &#39;password&#39;.
   * @return authType
   */
  @javax.annotation.Nullable
  public String getAuthType() {
    return authType;
  }

  public void setAuthType(@javax.annotation.Nullable String authType) {
    this.authType = authType;
  }


  public ElasticsearchSettingsConfig cloudId(@javax.annotation.Nullable String cloudId) {
    this.cloudId = cloudId;
    return this;
  }

  /**
   * The Cloud ID for connecting to an Elastic Cloud deployment. Required when connection_type is set to &#39;cloud_id&#39;.
   * @return cloudId
   */
  @javax.annotation.Nullable
  public String getCloudId() {
    return cloudId;
  }

  public void setCloudId(@javax.annotation.Nullable String cloudId) {
    this.cloudId = cloudId;
  }


  public ElasticsearchSettingsConfig connectionType(@javax.annotation.Nullable String connectionType) {
    this.connectionType = connectionType;
    return this;
  }

  /**
   * The type of connection to use with Elasticsearch. Choose between &#39;cloud_id&#39; for Elastic Cloud or &#39;url&#39; for direct connection.
   * @return connectionType
   */
  @javax.annotation.Nullable
  public String getConnectionType() {
    return connectionType;
  }

  public void setConnectionType(@javax.annotation.Nullable String connectionType) {
    this.connectionType = connectionType;
  }


  public ElasticsearchSettingsConfig index(@javax.annotation.Nullable String index) {
    this.index = index;
    return this;
  }

  /**
   * The name of the Elasticsearch index to write data to. If the index doesn&#39;t exist, it will be created automatically.
   * @return index
   */
  @javax.annotation.Nullable
  public String getIndex() {
    return index;
  }

  public void setIndex(@javax.annotation.Nullable String index) {
    this.index = index;
  }


  public ElasticsearchSettingsConfig insecureSkipVerify(@javax.annotation.Nullable Boolean insecureSkipVerify) {
    this.insecureSkipVerify = insecureSkipVerify;
    return this;
  }

  /**
   * If set to true, it skips verification of the server&#39;s TLS certificate. This is insecure and should only be used for testing purposes.
   * @return insecureSkipVerify
   */
  @javax.annotation.Nullable
  public Boolean getInsecureSkipVerify() {
    return insecureSkipVerify;
  }

  public void setInsecureSkipVerify(@javax.annotation.Nullable Boolean insecureSkipVerify) {
    this.insecureSkipVerify = insecureSkipVerify;
  }


  public ElasticsearchSettingsConfig url(@javax.annotation.Nullable String url) {
    this.url = url;
    return this;
  }

  /**
   * The URL of the Elasticsearch cluster. Required when connection type is set to &#39;url&#39;.
   * @return url
   */
  @javax.annotation.Nullable
  public String getUrl() {
    return url;
  }

  public void setUrl(@javax.annotation.Nullable String url) {
    this.url = url;
  }


  public ElasticsearchSettingsConfig username(@javax.annotation.Nullable String username) {
    this.username = username;
    return this;
  }

  /**
   * Username for authenticating with the Elasticsearch cluster.
   * @return username
   */
  @javax.annotation.Nullable
  public String getUsername() {
    return username;
  }

  public void setUsername(@javax.annotation.Nullable String username) {
    this.username = username;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ElasticsearchSettingsConfig elasticsearchSettingsConfig = (ElasticsearchSettingsConfig) o;
    return Objects.equals(this.authType, elasticsearchSettingsConfig.authType) &&
        Objects.equals(this.cloudId, elasticsearchSettingsConfig.cloudId) &&
        Objects.equals(this.connectionType, elasticsearchSettingsConfig.connectionType) &&
        Objects.equals(this.index, elasticsearchSettingsConfig.index) &&
        Objects.equals(this.insecureSkipVerify, elasticsearchSettingsConfig.insecureSkipVerify) &&
        Objects.equals(this.url, elasticsearchSettingsConfig.url) &&
        Objects.equals(this.username, elasticsearchSettingsConfig.username);
  }

  @Override
  public int hashCode() {
    return Objects.hash(authType, cloudId, connectionType, index, insecureSkipVerify, url, username);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ElasticsearchSettingsConfig {\n");
    sb.append("    authType: ").append(toIndentedString(authType)).append("\n");
    sb.append("    cloudId: ").append(toIndentedString(cloudId)).append("\n");
    sb.append("    connectionType: ").append(toIndentedString(connectionType)).append("\n");
    sb.append("    index: ").append(toIndentedString(index)).append("\n");
    sb.append("    insecureSkipVerify: ").append(toIndentedString(insecureSkipVerify)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("auth_type", "cloud_id", "connection_type", "index", "insecure_skip_verify", "url", "username"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to ElasticsearchSettingsConfig
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!ElasticsearchSettingsConfig.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in ElasticsearchSettingsConfig is not found in the empty JSON string", ElasticsearchSettingsConfig.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!ElasticsearchSettingsConfig.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `ElasticsearchSettingsConfig` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("auth_type") != null && !jsonObj.get("auth_type").isJsonNull()) && !jsonObj.get("auth_type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `auth_type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("auth_type").toString()));
      }
      if ((jsonObj.get("cloud_id") != null && !jsonObj.get("cloud_id").isJsonNull()) && !jsonObj.get("cloud_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `cloud_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("cloud_id").toString()));
      }
      if ((jsonObj.get("connection_type") != null && !jsonObj.get("connection_type").isJsonNull()) && !jsonObj.get("connection_type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `connection_type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("connection_type").toString()));
      }
      if ((jsonObj.get("index") != null && !jsonObj.get("index").isJsonNull()) && !jsonObj.get("index").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `index` to be a primitive type in the JSON string but got `%s`", jsonObj.get("index").toString()));
      }
      if ((jsonObj.get("url") != null && !jsonObj.get("url").isJsonNull()) && !jsonObj.get("url").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `url` to be a primitive type in the JSON string but got `%s`", jsonObj.get("url").toString()));
      }
      if ((jsonObj.get("username") != null && !jsonObj.get("username").isJsonNull()) && !jsonObj.get("username").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `username` to be a primitive type in the JSON string but got `%s`", jsonObj.get("username").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!ElasticsearchSettingsConfig.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'ElasticsearchSettingsConfig' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<ElasticsearchSettingsConfig> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(ElasticsearchSettingsConfig.class));

       return (TypeAdapter<T>) new TypeAdapter<ElasticsearchSettingsConfig>() {
           @Override
           public void write(JsonWriter out, ElasticsearchSettingsConfig value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public ElasticsearchSettingsConfig read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of ElasticsearchSettingsConfig given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of ElasticsearchSettingsConfig
   * @throws IOException if the JSON string is invalid with respect to ElasticsearchSettingsConfig
   */
  public static ElasticsearchSettingsConfig fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, ElasticsearchSettingsConfig.class);
  }

  /**
   * Convert an instance of ElasticsearchSettingsConfig to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

