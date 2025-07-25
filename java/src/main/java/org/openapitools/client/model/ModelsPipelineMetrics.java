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
import org.openapitools.client.model.ModelsPipelineMetricsValue;

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
 * ModelsPipelineMetrics
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class ModelsPipelineMetrics {
  public static final String SERIALIZED_NAME_END_AT = "end_at";
  @SerializedName(SERIALIZED_NAME_END_AT)
  @javax.annotation.Nullable
  private String endAt;

  public static final String SERIALIZED_NAME_METRIC = "metric";
  @SerializedName(SERIALIZED_NAME_METRIC)
  @javax.annotation.Nullable
  private String metric;

  public static final String SERIALIZED_NAME_NODE_ID = "node_id";
  @SerializedName(SERIALIZED_NAME_NODE_ID)
  @javax.annotation.Nullable
  private String nodeId;

  public static final String SERIALIZED_NAME_NODE_SLUG = "node_slug";
  @SerializedName(SERIALIZED_NAME_NODE_SLUG)
  @javax.annotation.Nullable
  private String nodeSlug;

  public static final String SERIALIZED_NAME_ORGANIZATION_ID = "organization_id";
  @SerializedName(SERIALIZED_NAME_ORGANIZATION_ID)
  @javax.annotation.Nullable
  private String organizationId;

  public static final String SERIALIZED_NAME_ORGANIZATION_NAME = "organization_name";
  @SerializedName(SERIALIZED_NAME_ORGANIZATION_NAME)
  @javax.annotation.Nullable
  private String organizationName;

  public static final String SERIALIZED_NAME_PIPELINE_ID = "pipeline_id";
  @SerializedName(SERIALIZED_NAME_PIPELINE_ID)
  @javax.annotation.Nullable
  private String pipelineId;

  public static final String SERIALIZED_NAME_PIPELINE_NAME = "pipeline_name";
  @SerializedName(SERIALIZED_NAME_PIPELINE_NAME)
  @javax.annotation.Nullable
  private String pipelineName;

  public static final String SERIALIZED_NAME_RESOLUTION = "resolution";
  @SerializedName(SERIALIZED_NAME_RESOLUTION)
  @javax.annotation.Nullable
  private String resolution;

  public static final String SERIALIZED_NAME_START_AT = "start_at";
  @SerializedName(SERIALIZED_NAME_START_AT)
  @javax.annotation.Nullable
  private String startAt;

  public static final String SERIALIZED_NAME_VALUES = "values";
  @SerializedName(SERIALIZED_NAME_VALUES)
  @javax.annotation.Nullable
  private List<ModelsPipelineMetricsValue> values = new ArrayList<>();

  public ModelsPipelineMetrics() {
  }

  public ModelsPipelineMetrics endAt(@javax.annotation.Nullable String endAt) {
    this.endAt = endAt;
    return this;
  }

  /**
   * Get endAt
   * @return endAt
   */
  @javax.annotation.Nullable
  public String getEndAt() {
    return endAt;
  }

  public void setEndAt(@javax.annotation.Nullable String endAt) {
    this.endAt = endAt;
  }


  public ModelsPipelineMetrics metric(@javax.annotation.Nullable String metric) {
    this.metric = metric;
    return this;
  }

  /**
   * Get metric
   * @return metric
   */
  @javax.annotation.Nullable
  public String getMetric() {
    return metric;
  }

  public void setMetric(@javax.annotation.Nullable String metric) {
    this.metric = metric;
  }


  public ModelsPipelineMetrics nodeId(@javax.annotation.Nullable String nodeId) {
    this.nodeId = nodeId;
    return this;
  }

  /**
   * Get nodeId
   * @return nodeId
   */
  @javax.annotation.Nullable
  public String getNodeId() {
    return nodeId;
  }

  public void setNodeId(@javax.annotation.Nullable String nodeId) {
    this.nodeId = nodeId;
  }


  public ModelsPipelineMetrics nodeSlug(@javax.annotation.Nullable String nodeSlug) {
    this.nodeSlug = nodeSlug;
    return this;
  }

  /**
   * Get nodeSlug
   * @return nodeSlug
   */
  @javax.annotation.Nullable
  public String getNodeSlug() {
    return nodeSlug;
  }

  public void setNodeSlug(@javax.annotation.Nullable String nodeSlug) {
    this.nodeSlug = nodeSlug;
  }


  public ModelsPipelineMetrics organizationId(@javax.annotation.Nullable String organizationId) {
    this.organizationId = organizationId;
    return this;
  }

  /**
   * Get organizationId
   * @return organizationId
   */
  @javax.annotation.Nullable
  public String getOrganizationId() {
    return organizationId;
  }

  public void setOrganizationId(@javax.annotation.Nullable String organizationId) {
    this.organizationId = organizationId;
  }


  public ModelsPipelineMetrics organizationName(@javax.annotation.Nullable String organizationName) {
    this.organizationName = organizationName;
    return this;
  }

  /**
   * Get organizationName
   * @return organizationName
   */
  @javax.annotation.Nullable
  public String getOrganizationName() {
    return organizationName;
  }

  public void setOrganizationName(@javax.annotation.Nullable String organizationName) {
    this.organizationName = organizationName;
  }


  public ModelsPipelineMetrics pipelineId(@javax.annotation.Nullable String pipelineId) {
    this.pipelineId = pipelineId;
    return this;
  }

  /**
   * Get pipelineId
   * @return pipelineId
   */
  @javax.annotation.Nullable
  public String getPipelineId() {
    return pipelineId;
  }

  public void setPipelineId(@javax.annotation.Nullable String pipelineId) {
    this.pipelineId = pipelineId;
  }


  public ModelsPipelineMetrics pipelineName(@javax.annotation.Nullable String pipelineName) {
    this.pipelineName = pipelineName;
    return this;
  }

  /**
   * Get pipelineName
   * @return pipelineName
   */
  @javax.annotation.Nullable
  public String getPipelineName() {
    return pipelineName;
  }

  public void setPipelineName(@javax.annotation.Nullable String pipelineName) {
    this.pipelineName = pipelineName;
  }


  public ModelsPipelineMetrics resolution(@javax.annotation.Nullable String resolution) {
    this.resolution = resolution;
    return this;
  }

  /**
   * Get resolution
   * @return resolution
   */
  @javax.annotation.Nullable
  public String getResolution() {
    return resolution;
  }

  public void setResolution(@javax.annotation.Nullable String resolution) {
    this.resolution = resolution;
  }


  public ModelsPipelineMetrics startAt(@javax.annotation.Nullable String startAt) {
    this.startAt = startAt;
    return this;
  }

  /**
   * Get startAt
   * @return startAt
   */
  @javax.annotation.Nullable
  public String getStartAt() {
    return startAt;
  }

  public void setStartAt(@javax.annotation.Nullable String startAt) {
    this.startAt = startAt;
  }


  public ModelsPipelineMetrics values(@javax.annotation.Nullable List<ModelsPipelineMetricsValue> values) {
    this.values = values;
    return this;
  }

  public ModelsPipelineMetrics addValuesItem(ModelsPipelineMetricsValue valuesItem) {
    if (this.values == null) {
      this.values = new ArrayList<>();
    }
    this.values.add(valuesItem);
    return this;
  }

  /**
   * Get values
   * @return values
   */
  @javax.annotation.Nullable
  public List<ModelsPipelineMetricsValue> getValues() {
    return values;
  }

  public void setValues(@javax.annotation.Nullable List<ModelsPipelineMetricsValue> values) {
    this.values = values;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModelsPipelineMetrics modelsPipelineMetrics = (ModelsPipelineMetrics) o;
    return Objects.equals(this.endAt, modelsPipelineMetrics.endAt) &&
        Objects.equals(this.metric, modelsPipelineMetrics.metric) &&
        Objects.equals(this.nodeId, modelsPipelineMetrics.nodeId) &&
        Objects.equals(this.nodeSlug, modelsPipelineMetrics.nodeSlug) &&
        Objects.equals(this.organizationId, modelsPipelineMetrics.organizationId) &&
        Objects.equals(this.organizationName, modelsPipelineMetrics.organizationName) &&
        Objects.equals(this.pipelineId, modelsPipelineMetrics.pipelineId) &&
        Objects.equals(this.pipelineName, modelsPipelineMetrics.pipelineName) &&
        Objects.equals(this.resolution, modelsPipelineMetrics.resolution) &&
        Objects.equals(this.startAt, modelsPipelineMetrics.startAt) &&
        Objects.equals(this.values, modelsPipelineMetrics.values);
  }

  @Override
  public int hashCode() {
    return Objects.hash(endAt, metric, nodeId, nodeSlug, organizationId, organizationName, pipelineId, pipelineName, resolution, startAt, values);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelsPipelineMetrics {\n");
    sb.append("    endAt: ").append(toIndentedString(endAt)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    nodeId: ").append(toIndentedString(nodeId)).append("\n");
    sb.append("    nodeSlug: ").append(toIndentedString(nodeSlug)).append("\n");
    sb.append("    organizationId: ").append(toIndentedString(organizationId)).append("\n");
    sb.append("    organizationName: ").append(toIndentedString(organizationName)).append("\n");
    sb.append("    pipelineId: ").append(toIndentedString(pipelineId)).append("\n");
    sb.append("    pipelineName: ").append(toIndentedString(pipelineName)).append("\n");
    sb.append("    resolution: ").append(toIndentedString(resolution)).append("\n");
    sb.append("    startAt: ").append(toIndentedString(startAt)).append("\n");
    sb.append("    values: ").append(toIndentedString(values)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("end_at", "metric", "node_id", "node_slug", "organization_id", "organization_name", "pipeline_id", "pipeline_name", "resolution", "start_at", "values"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to ModelsPipelineMetrics
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!ModelsPipelineMetrics.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in ModelsPipelineMetrics is not found in the empty JSON string", ModelsPipelineMetrics.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!ModelsPipelineMetrics.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `ModelsPipelineMetrics` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("end_at") != null && !jsonObj.get("end_at").isJsonNull()) && !jsonObj.get("end_at").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `end_at` to be a primitive type in the JSON string but got `%s`", jsonObj.get("end_at").toString()));
      }
      if ((jsonObj.get("metric") != null && !jsonObj.get("metric").isJsonNull()) && !jsonObj.get("metric").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `metric` to be a primitive type in the JSON string but got `%s`", jsonObj.get("metric").toString()));
      }
      if ((jsonObj.get("node_id") != null && !jsonObj.get("node_id").isJsonNull()) && !jsonObj.get("node_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `node_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("node_id").toString()));
      }
      if ((jsonObj.get("node_slug") != null && !jsonObj.get("node_slug").isJsonNull()) && !jsonObj.get("node_slug").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `node_slug` to be a primitive type in the JSON string but got `%s`", jsonObj.get("node_slug").toString()));
      }
      if ((jsonObj.get("organization_id") != null && !jsonObj.get("organization_id").isJsonNull()) && !jsonObj.get("organization_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `organization_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("organization_id").toString()));
      }
      if ((jsonObj.get("organization_name") != null && !jsonObj.get("organization_name").isJsonNull()) && !jsonObj.get("organization_name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `organization_name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("organization_name").toString()));
      }
      if ((jsonObj.get("pipeline_id") != null && !jsonObj.get("pipeline_id").isJsonNull()) && !jsonObj.get("pipeline_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `pipeline_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("pipeline_id").toString()));
      }
      if ((jsonObj.get("pipeline_name") != null && !jsonObj.get("pipeline_name").isJsonNull()) && !jsonObj.get("pipeline_name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `pipeline_name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("pipeline_name").toString()));
      }
      if ((jsonObj.get("resolution") != null && !jsonObj.get("resolution").isJsonNull()) && !jsonObj.get("resolution").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `resolution` to be a primitive type in the JSON string but got `%s`", jsonObj.get("resolution").toString()));
      }
      if ((jsonObj.get("start_at") != null && !jsonObj.get("start_at").isJsonNull()) && !jsonObj.get("start_at").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `start_at` to be a primitive type in the JSON string but got `%s`", jsonObj.get("start_at").toString()));
      }
      if (jsonObj.get("values") != null && !jsonObj.get("values").isJsonNull()) {
        JsonArray jsonArrayvalues = jsonObj.getAsJsonArray("values");
        if (jsonArrayvalues != null) {
          // ensure the json data is an array
          if (!jsonObj.get("values").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `values` to be an array in the JSON string but got `%s`", jsonObj.get("values").toString()));
          }

          // validate the optional field `values` (array)
          for (int i = 0; i < jsonArrayvalues.size(); i++) {
            ModelsPipelineMetricsValue.validateJsonElement(jsonArrayvalues.get(i));
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!ModelsPipelineMetrics.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'ModelsPipelineMetrics' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<ModelsPipelineMetrics> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(ModelsPipelineMetrics.class));

       return (TypeAdapter<T>) new TypeAdapter<ModelsPipelineMetrics>() {
           @Override
           public void write(JsonWriter out, ModelsPipelineMetrics value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public ModelsPipelineMetrics read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of ModelsPipelineMetrics given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of ModelsPipelineMetrics
   * @throws IOException if the JSON string is invalid with respect to ModelsPipelineMetrics
   */
  public static ModelsPipelineMetrics fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, ModelsPipelineMetrics.class);
  }

  /**
   * Convert an instance of ModelsPipelineMetrics to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

