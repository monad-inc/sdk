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
 * PostgresqlSettingsConfig
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class PostgresqlSettingsConfig {
  public static final String SERIALIZED_NAME_COLUMN_NAMES = "column_names";
  @SerializedName(SERIALIZED_NAME_COLUMN_NAMES)
  @javax.annotation.Nullable
  private List<String> columnNames = new ArrayList<>();

  public static final String SERIALIZED_NAME_DATABASE = "database";
  @SerializedName(SERIALIZED_NAME_DATABASE)
  @javax.annotation.Nullable
  private String database;

  public static final String SERIALIZED_NAME_HOST = "host";
  @SerializedName(SERIALIZED_NAME_HOST)
  @javax.annotation.Nullable
  private String host;

  public static final String SERIALIZED_NAME_PORT = "port";
  @SerializedName(SERIALIZED_NAME_PORT)
  @javax.annotation.Nullable
  private Integer port;

  public static final String SERIALIZED_NAME_TABLE = "table";
  @SerializedName(SERIALIZED_NAME_TABLE)
  @javax.annotation.Nullable
  private String table;

  public static final String SERIALIZED_NAME_USER = "user";
  @SerializedName(SERIALIZED_NAME_USER)
  @javax.annotation.Nullable
  private String user;

  public PostgresqlSettingsConfig() {
  }

  public PostgresqlSettingsConfig columnNames(@javax.annotation.Nullable List<String> columnNames) {
    this.columnNames = columnNames;
    return this;
  }

  public PostgresqlSettingsConfig addColumnNamesItem(String columnNamesItem) {
    if (this.columnNames == null) {
      this.columnNames = new ArrayList<>();
    }
    this.columnNames.add(columnNamesItem);
    return this;
  }

  /**
   * The column names to write data to, must match the root fields of the data If not provided all root fields will be used
   * @return columnNames
   */
  @javax.annotation.Nullable
  public List<String> getColumnNames() {
    return columnNames;
  }

  public void setColumnNames(@javax.annotation.Nullable List<String> columnNames) {
    this.columnNames = columnNames;
  }


  public PostgresqlSettingsConfig database(@javax.annotation.Nullable String database) {
    this.database = database;
    return this;
  }

  /**
   * The database name to connect to
   * @return database
   */
  @javax.annotation.Nullable
  public String getDatabase() {
    return database;
  }

  public void setDatabase(@javax.annotation.Nullable String database) {
    this.database = database;
  }


  public PostgresqlSettingsConfig host(@javax.annotation.Nullable String host) {
    this.host = host;
    return this;
  }

  /**
   * The host of the PostgreSQL database
   * @return host
   */
  @javax.annotation.Nullable
  public String getHost() {
    return host;
  }

  public void setHost(@javax.annotation.Nullable String host) {
    this.host = host;
  }


  public PostgresqlSettingsConfig port(@javax.annotation.Nullable Integer port) {
    this.port = port;
    return this;
  }

  /**
   * The port of the PostgreSQL database
   * @return port
   */
  @javax.annotation.Nullable
  public Integer getPort() {
    return port;
  }

  public void setPort(@javax.annotation.Nullable Integer port) {
    this.port = port;
  }


  public PostgresqlSettingsConfig table(@javax.annotation.Nullable String table) {
    this.table = table;
    return this;
  }

  /**
   * The table name to write data to
   * @return table
   */
  @javax.annotation.Nullable
  public String getTable() {
    return table;
  }

  public void setTable(@javax.annotation.Nullable String table) {
    this.table = table;
  }


  public PostgresqlSettingsConfig user(@javax.annotation.Nullable String user) {
    this.user = user;
    return this;
  }

  /**
   * The user to connect to the PostgreSQL database
   * @return user
   */
  @javax.annotation.Nullable
  public String getUser() {
    return user;
  }

  public void setUser(@javax.annotation.Nullable String user) {
    this.user = user;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PostgresqlSettingsConfig postgresqlSettingsConfig = (PostgresqlSettingsConfig) o;
    return Objects.equals(this.columnNames, postgresqlSettingsConfig.columnNames) &&
        Objects.equals(this.database, postgresqlSettingsConfig.database) &&
        Objects.equals(this.host, postgresqlSettingsConfig.host) &&
        Objects.equals(this.port, postgresqlSettingsConfig.port) &&
        Objects.equals(this.table, postgresqlSettingsConfig.table) &&
        Objects.equals(this.user, postgresqlSettingsConfig.user);
  }

  @Override
  public int hashCode() {
    return Objects.hash(columnNames, database, host, port, table, user);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PostgresqlSettingsConfig {\n");
    sb.append("    columnNames: ").append(toIndentedString(columnNames)).append("\n");
    sb.append("    database: ").append(toIndentedString(database)).append("\n");
    sb.append("    host: ").append(toIndentedString(host)).append("\n");
    sb.append("    port: ").append(toIndentedString(port)).append("\n");
    sb.append("    table: ").append(toIndentedString(table)).append("\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("column_names", "database", "host", "port", "table", "user"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to PostgresqlSettingsConfig
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!PostgresqlSettingsConfig.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PostgresqlSettingsConfig is not found in the empty JSON string", PostgresqlSettingsConfig.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!PostgresqlSettingsConfig.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PostgresqlSettingsConfig` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the optional json data is an array if present
      if (jsonObj.get("column_names") != null && !jsonObj.get("column_names").isJsonNull() && !jsonObj.get("column_names").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `column_names` to be an array in the JSON string but got `%s`", jsonObj.get("column_names").toString()));
      }
      if ((jsonObj.get("database") != null && !jsonObj.get("database").isJsonNull()) && !jsonObj.get("database").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `database` to be a primitive type in the JSON string but got `%s`", jsonObj.get("database").toString()));
      }
      if ((jsonObj.get("host") != null && !jsonObj.get("host").isJsonNull()) && !jsonObj.get("host").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `host` to be a primitive type in the JSON string but got `%s`", jsonObj.get("host").toString()));
      }
      if ((jsonObj.get("table") != null && !jsonObj.get("table").isJsonNull()) && !jsonObj.get("table").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `table` to be a primitive type in the JSON string but got `%s`", jsonObj.get("table").toString()));
      }
      if ((jsonObj.get("user") != null && !jsonObj.get("user").isJsonNull()) && !jsonObj.get("user").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `user` to be a primitive type in the JSON string but got `%s`", jsonObj.get("user").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PostgresqlSettingsConfig.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PostgresqlSettingsConfig' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PostgresqlSettingsConfig> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PostgresqlSettingsConfig.class));

       return (TypeAdapter<T>) new TypeAdapter<PostgresqlSettingsConfig>() {
           @Override
           public void write(JsonWriter out, PostgresqlSettingsConfig value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PostgresqlSettingsConfig read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of PostgresqlSettingsConfig given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of PostgresqlSettingsConfig
   * @throws IOException if the JSON string is invalid with respect to PostgresqlSettingsConfig
   */
  public static PostgresqlSettingsConfig fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PostgresqlSettingsConfig.class);
  }

  /**
   * Convert an instance of PostgresqlSettingsConfig to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

