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
import org.openapitools.client.model.RoutesV3TransformOperation;

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
 * RoutesV3TransformConfig
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class RoutesV3TransformConfig {
  public static final String SERIALIZED_NAME_OPERATIONS = "operations";
  @SerializedName(SERIALIZED_NAME_OPERATIONS)
  @javax.annotation.Nullable
  private List<RoutesV3TransformOperation> operations = new ArrayList<>();

  public RoutesV3TransformConfig() {
  }

  public RoutesV3TransformConfig operations(@javax.annotation.Nullable List<RoutesV3TransformOperation> operations) {
    this.operations = operations;
    return this;
  }

  public RoutesV3TransformConfig addOperationsItem(RoutesV3TransformOperation operationsItem) {
    if (this.operations == null) {
      this.operations = new ArrayList<>();
    }
    this.operations.add(operationsItem);
    return this;
  }

  /**
   * Get operations
   * @return operations
   */
  @javax.annotation.Nullable
  public List<RoutesV3TransformOperation> getOperations() {
    return operations;
  }

  public void setOperations(@javax.annotation.Nullable List<RoutesV3TransformOperation> operations) {
    this.operations = operations;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RoutesV3TransformConfig routesV3TransformConfig = (RoutesV3TransformConfig) o;
    return Objects.equals(this.operations, routesV3TransformConfig.operations);
  }

  @Override
  public int hashCode() {
    return Objects.hash(operations);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RoutesV3TransformConfig {\n");
    sb.append("    operations: ").append(toIndentedString(operations)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("operations"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to RoutesV3TransformConfig
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!RoutesV3TransformConfig.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in RoutesV3TransformConfig is not found in the empty JSON string", RoutesV3TransformConfig.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!RoutesV3TransformConfig.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `RoutesV3TransformConfig` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (jsonObj.get("operations") != null && !jsonObj.get("operations").isJsonNull()) {
        JsonArray jsonArrayoperations = jsonObj.getAsJsonArray("operations");
        if (jsonArrayoperations != null) {
          // ensure the json data is an array
          if (!jsonObj.get("operations").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `operations` to be an array in the JSON string but got `%s`", jsonObj.get("operations").toString()));
          }

          // validate the optional field `operations` (array)
          for (int i = 0; i < jsonArrayoperations.size(); i++) {
            RoutesV3TransformOperation.validateJsonElement(jsonArrayoperations.get(i));
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!RoutesV3TransformConfig.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'RoutesV3TransformConfig' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<RoutesV3TransformConfig> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(RoutesV3TransformConfig.class));

       return (TypeAdapter<T>) new TypeAdapter<RoutesV3TransformConfig>() {
           @Override
           public void write(JsonWriter out, RoutesV3TransformConfig value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public RoutesV3TransformConfig read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of RoutesV3TransformConfig given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of RoutesV3TransformConfig
   * @throws IOException if the JSON string is invalid with respect to RoutesV3TransformConfig
   */
  public static RoutesV3TransformConfig fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, RoutesV3TransformConfig.class);
  }

  /**
   * Convert an instance of RoutesV3TransformConfig to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

