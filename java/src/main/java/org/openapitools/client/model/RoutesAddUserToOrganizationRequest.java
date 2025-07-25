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
 * RoutesAddUserToOrganizationRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class RoutesAddUserToOrganizationRequest {
  public static final String SERIALIZED_NAME_ROLE_ID = "role_id";
  @SerializedName(SERIALIZED_NAME_ROLE_ID)
  @javax.annotation.Nonnull
  private String roleId;

  public static final String SERIALIZED_NAME_USER_ID = "user_id";
  @SerializedName(SERIALIZED_NAME_USER_ID)
  @javax.annotation.Nonnull
  private String userId;

  public RoutesAddUserToOrganizationRequest() {
  }

  public RoutesAddUserToOrganizationRequest roleId(@javax.annotation.Nonnull String roleId) {
    this.roleId = roleId;
    return this;
  }

  /**
   * Get roleId
   * @return roleId
   */
  @javax.annotation.Nonnull
  public String getRoleId() {
    return roleId;
  }

  public void setRoleId(@javax.annotation.Nonnull String roleId) {
    this.roleId = roleId;
  }


  public RoutesAddUserToOrganizationRequest userId(@javax.annotation.Nonnull String userId) {
    this.userId = userId;
    return this;
  }

  /**
   * Get userId
   * @return userId
   */
  @javax.annotation.Nonnull
  public String getUserId() {
    return userId;
  }

  public void setUserId(@javax.annotation.Nonnull String userId) {
    this.userId = userId;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RoutesAddUserToOrganizationRequest routesAddUserToOrganizationRequest = (RoutesAddUserToOrganizationRequest) o;
    return Objects.equals(this.roleId, routesAddUserToOrganizationRequest.roleId) &&
        Objects.equals(this.userId, routesAddUserToOrganizationRequest.userId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(roleId, userId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RoutesAddUserToOrganizationRequest {\n");
    sb.append("    roleId: ").append(toIndentedString(roleId)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("role_id", "user_id"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(Arrays.asList("role_id", "user_id"));
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to RoutesAddUserToOrganizationRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!RoutesAddUserToOrganizationRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in RoutesAddUserToOrganizationRequest is not found in the empty JSON string", RoutesAddUserToOrganizationRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!RoutesAddUserToOrganizationRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `RoutesAddUserToOrganizationRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : RoutesAddUserToOrganizationRequest.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("role_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `role_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("role_id").toString()));
      }
      if (!jsonObj.get("user_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `user_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("user_id").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!RoutesAddUserToOrganizationRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'RoutesAddUserToOrganizationRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<RoutesAddUserToOrganizationRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(RoutesAddUserToOrganizationRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<RoutesAddUserToOrganizationRequest>() {
           @Override
           public void write(JsonWriter out, RoutesAddUserToOrganizationRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public RoutesAddUserToOrganizationRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of RoutesAddUserToOrganizationRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of RoutesAddUserToOrganizationRequest
   * @throws IOException if the JSON string is invalid with respect to RoutesAddUserToOrganizationRequest
   */
  public static RoutesAddUserToOrganizationRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, RoutesAddUserToOrganizationRequest.class);
  }

  /**
   * Convert an instance of RoutesAddUserToOrganizationRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

