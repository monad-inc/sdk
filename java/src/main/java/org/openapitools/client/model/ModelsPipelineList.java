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
import org.openapitools.client.model.ModelsPagination;
import org.openapitools.client.model.ModelsPipeline;

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
 * ModelsPipelineList
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class ModelsPipelineList {
  public static final String SERIALIZED_NAME_PAGINATION = "pagination";
  @SerializedName(SERIALIZED_NAME_PAGINATION)
  @javax.annotation.Nullable
  private ModelsPagination pagination;

  public static final String SERIALIZED_NAME_PIPELINES = "pipelines";
  @SerializedName(SERIALIZED_NAME_PIPELINES)
  @javax.annotation.Nullable
  private List<ModelsPipeline> pipelines = new ArrayList<>();

  public ModelsPipelineList() {
  }

  public ModelsPipelineList pagination(@javax.annotation.Nullable ModelsPagination pagination) {
    this.pagination = pagination;
    return this;
  }

  /**
   * Get pagination
   * @return pagination
   */
  @javax.annotation.Nullable
  public ModelsPagination getPagination() {
    return pagination;
  }

  public void setPagination(@javax.annotation.Nullable ModelsPagination pagination) {
    this.pagination = pagination;
  }


  public ModelsPipelineList pipelines(@javax.annotation.Nullable List<ModelsPipeline> pipelines) {
    this.pipelines = pipelines;
    return this;
  }

  public ModelsPipelineList addPipelinesItem(ModelsPipeline pipelinesItem) {
    if (this.pipelines == null) {
      this.pipelines = new ArrayList<>();
    }
    this.pipelines.add(pipelinesItem);
    return this;
  }

  /**
   * Get pipelines
   * @return pipelines
   */
  @javax.annotation.Nullable
  public List<ModelsPipeline> getPipelines() {
    return pipelines;
  }

  public void setPipelines(@javax.annotation.Nullable List<ModelsPipeline> pipelines) {
    this.pipelines = pipelines;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModelsPipelineList modelsPipelineList = (ModelsPipelineList) o;
    return Objects.equals(this.pagination, modelsPipelineList.pagination) &&
        Objects.equals(this.pipelines, modelsPipelineList.pipelines);
  }

  @Override
  public int hashCode() {
    return Objects.hash(pagination, pipelines);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelsPipelineList {\n");
    sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
    sb.append("    pipelines: ").append(toIndentedString(pipelines)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("pagination", "pipelines"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to ModelsPipelineList
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!ModelsPipelineList.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in ModelsPipelineList is not found in the empty JSON string", ModelsPipelineList.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!ModelsPipelineList.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `ModelsPipelineList` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // validate the optional field `pagination`
      if (jsonObj.get("pagination") != null && !jsonObj.get("pagination").isJsonNull()) {
        ModelsPagination.validateJsonElement(jsonObj.get("pagination"));
      }
      if (jsonObj.get("pipelines") != null && !jsonObj.get("pipelines").isJsonNull()) {
        JsonArray jsonArraypipelines = jsonObj.getAsJsonArray("pipelines");
        if (jsonArraypipelines != null) {
          // ensure the json data is an array
          if (!jsonObj.get("pipelines").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `pipelines` to be an array in the JSON string but got `%s`", jsonObj.get("pipelines").toString()));
          }

          // validate the optional field `pipelines` (array)
          for (int i = 0; i < jsonArraypipelines.size(); i++) {
            ModelsPipeline.validateJsonElement(jsonArraypipelines.get(i));
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!ModelsPipelineList.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'ModelsPipelineList' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<ModelsPipelineList> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(ModelsPipelineList.class));

       return (TypeAdapter<T>) new TypeAdapter<ModelsPipelineList>() {
           @Override
           public void write(JsonWriter out, ModelsPipelineList value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public ModelsPipelineList read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of ModelsPipelineList given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of ModelsPipelineList
   * @throws IOException if the JSON string is invalid with respect to ModelsPipelineList
   */
  public static ModelsPipelineList fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, ModelsPipelineList.class);
  }

  /**
   * Convert an instance of ModelsPipelineList to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

