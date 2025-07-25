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
 * FlattenallFlattenAll
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class FlattenallFlattenAll {
  public static final String SERIALIZED_NAME_DELIMITER = "delimiter";
  @SerializedName(SERIALIZED_NAME_DELIMITER)
  @javax.annotation.Nullable
  private String delimiter;

  public FlattenallFlattenAll() {
  }

  public FlattenallFlattenAll delimiter(@javax.annotation.Nullable String delimiter) {
    this.delimiter = delimiter;
    return this;
  }

  /**
   * The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1
   * @return delimiter
   */
  @javax.annotation.Nullable
  public String getDelimiter() {
    return delimiter;
  }

  public void setDelimiter(@javax.annotation.Nullable String delimiter) {
    this.delimiter = delimiter;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FlattenallFlattenAll flattenallFlattenAll = (FlattenallFlattenAll) o;
    return Objects.equals(this.delimiter, flattenallFlattenAll.delimiter);
  }

  @Override
  public int hashCode() {
    return Objects.hash(delimiter);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FlattenallFlattenAll {\n");
    sb.append("    delimiter: ").append(toIndentedString(delimiter)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("delimiter"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to FlattenallFlattenAll
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!FlattenallFlattenAll.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in FlattenallFlattenAll is not found in the empty JSON string", FlattenallFlattenAll.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!FlattenallFlattenAll.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `FlattenallFlattenAll` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("delimiter") != null && !jsonObj.get("delimiter").isJsonNull()) && !jsonObj.get("delimiter").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `delimiter` to be a primitive type in the JSON string but got `%s`", jsonObj.get("delimiter").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!FlattenallFlattenAll.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'FlattenallFlattenAll' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<FlattenallFlattenAll> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(FlattenallFlattenAll.class));

       return (TypeAdapter<T>) new TypeAdapter<FlattenallFlattenAll>() {
           @Override
           public void write(JsonWriter out, FlattenallFlattenAll value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public FlattenallFlattenAll read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of FlattenallFlattenAll given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of FlattenallFlattenAll
   * @throws IOException if the JSON string is invalid with respect to FlattenallFlattenAll
   */
  public static FlattenallFlattenAll fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, FlattenallFlattenAll.class);
  }

  /**
   * Convert an instance of FlattenallFlattenAll to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

