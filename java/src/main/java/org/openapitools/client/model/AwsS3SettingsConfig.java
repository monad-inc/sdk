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
 * AWS S3 settings
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class AwsS3SettingsConfig {
  public static final String SERIALIZED_NAME_BUCKET = "bucket";
  @SerializedName(SERIALIZED_NAME_BUCKET)
  @javax.annotation.Nullable
  private String bucket;

  public static final String SERIALIZED_NAME_COMPRESSION = "compression";
  @SerializedName(SERIALIZED_NAME_COMPRESSION)
  @javax.annotation.Nullable
  private String compression;

  public static final String SERIALIZED_NAME_FORMAT = "format";
  @SerializedName(SERIALIZED_NAME_FORMAT)
  @javax.annotation.Nullable
  private String format;

  public static final String SERIALIZED_NAME_PARTITION_FORMAT = "partition_format";
  @SerializedName(SERIALIZED_NAME_PARTITION_FORMAT)
  @javax.annotation.Nullable
  private String partitionFormat;

  public static final String SERIALIZED_NAME_PREFIX = "prefix";
  @SerializedName(SERIALIZED_NAME_PREFIX)
  @javax.annotation.Nullable
  private String prefix;

  public static final String SERIALIZED_NAME_RECORD_LOCATION = "record_location";
  @SerializedName(SERIALIZED_NAME_RECORD_LOCATION)
  @javax.annotation.Nullable
  private String recordLocation;

  public static final String SERIALIZED_NAME_REGION = "region";
  @SerializedName(SERIALIZED_NAME_REGION)
  @javax.annotation.Nullable
  private String region;

  public static final String SERIALIZED_NAME_ROLE_ARN = "role_arn";
  @SerializedName(SERIALIZED_NAME_ROLE_ARN)
  @javax.annotation.Nullable
  private String roleArn;

  public AwsS3SettingsConfig() {
  }

  public AwsS3SettingsConfig bucket(@javax.annotation.Nullable String bucket) {
    this.bucket = bucket;
    return this;
  }

  /**
   * Name of the S3 bucket.
   * @return bucket
   */
  @javax.annotation.Nullable
  public String getBucket() {
    return bucket;
  }

  public void setBucket(@javax.annotation.Nullable String bucket) {
    this.bucket = bucket;
  }


  public AwsS3SettingsConfig compression(@javax.annotation.Nullable String compression) {
    this.compression = compression;
    return this;
  }

  /**
   * Compression format of the S3 objects.
   * @return compression
   */
  @javax.annotation.Nullable
  public String getCompression() {
    return compression;
  }

  public void setCompression(@javax.annotation.Nullable String compression) {
    this.compression = compression;
  }


  public AwsS3SettingsConfig format(@javax.annotation.Nullable String format) {
    this.format = format;
    return this;
  }

  /**
   * File format of the S3 objects.
   * @return format
   */
  @javax.annotation.Nullable
  public String getFormat() {
    return format;
  }

  public void setFormat(@javax.annotation.Nullable String format) {
    this.format = format;
  }


  public AwsS3SettingsConfig partitionFormat(@javax.annotation.Nullable String partitionFormat) {
    this.partitionFormat = partitionFormat;
    return this;
  }

  /**
   * Specifies the partition format of your S3 bucket. Select the option that matches how your data is currently organized in S3. This ensures that the system can correctly navigate your bucket structure. Options include Hive-compatible format (&#39;year&#x3D;2024/month&#x3D;01/day&#x3D;01&#39;) commonly used in data lake setups, and simple date format (&#39;2024/01/01&#39;) for basic chronological organization.
   * @return partitionFormat
   */
  @javax.annotation.Nullable
  public String getPartitionFormat() {
    return partitionFormat;
  }

  public void setPartitionFormat(@javax.annotation.Nullable String partitionFormat) {
    this.partitionFormat = partitionFormat;
  }


  public AwsS3SettingsConfig prefix(@javax.annotation.Nullable String prefix) {
    this.prefix = prefix;
    return this;
  }

  /**
   * Prefix of the S3 object keys to read.
   * @return prefix
   */
  @javax.annotation.Nullable
  public String getPrefix() {
    return prefix;
  }

  public void setPrefix(@javax.annotation.Nullable String prefix) {
    this.prefix = prefix;
  }


  public AwsS3SettingsConfig recordLocation(@javax.annotation.Nullable String recordLocation) {
    this.recordLocation = recordLocation;
    return this;
  }

  /**
   * Location of the record in the JSON object. This can be ignored if the record is not in JSON format.
   * @return recordLocation
   */
  @javax.annotation.Nullable
  public String getRecordLocation() {
    return recordLocation;
  }

  public void setRecordLocation(@javax.annotation.Nullable String recordLocation) {
    this.recordLocation = recordLocation;
  }


  public AwsS3SettingsConfig region(@javax.annotation.Nullable String region) {
    this.region = region;
    return this;
  }

  /**
   * AWS Region of your bucket.
   * @return region
   */
  @javax.annotation.Nullable
  public String getRegion() {
    return region;
  }

  public void setRegion(@javax.annotation.Nullable String region) {
    this.region = region;
  }


  public AwsS3SettingsConfig roleArn(@javax.annotation.Nullable String roleArn) {
    this.roleArn = roleArn;
    return this;
  }

  /**
   * Role ARN to assume when reading from S3.
   * @return roleArn
   */
  @javax.annotation.Nullable
  public String getRoleArn() {
    return roleArn;
  }

  public void setRoleArn(@javax.annotation.Nullable String roleArn) {
    this.roleArn = roleArn;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AwsS3SettingsConfig awsS3SettingsConfig = (AwsS3SettingsConfig) o;
    return Objects.equals(this.bucket, awsS3SettingsConfig.bucket) &&
        Objects.equals(this.compression, awsS3SettingsConfig.compression) &&
        Objects.equals(this.format, awsS3SettingsConfig.format) &&
        Objects.equals(this.partitionFormat, awsS3SettingsConfig.partitionFormat) &&
        Objects.equals(this.prefix, awsS3SettingsConfig.prefix) &&
        Objects.equals(this.recordLocation, awsS3SettingsConfig.recordLocation) &&
        Objects.equals(this.region, awsS3SettingsConfig.region) &&
        Objects.equals(this.roleArn, awsS3SettingsConfig.roleArn);
  }

  @Override
  public int hashCode() {
    return Objects.hash(bucket, compression, format, partitionFormat, prefix, recordLocation, region, roleArn);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AwsS3SettingsConfig {\n");
    sb.append("    bucket: ").append(toIndentedString(bucket)).append("\n");
    sb.append("    compression: ").append(toIndentedString(compression)).append("\n");
    sb.append("    format: ").append(toIndentedString(format)).append("\n");
    sb.append("    partitionFormat: ").append(toIndentedString(partitionFormat)).append("\n");
    sb.append("    prefix: ").append(toIndentedString(prefix)).append("\n");
    sb.append("    recordLocation: ").append(toIndentedString(recordLocation)).append("\n");
    sb.append("    region: ").append(toIndentedString(region)).append("\n");
    sb.append("    roleArn: ").append(toIndentedString(roleArn)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("bucket", "compression", "format", "partition_format", "prefix", "record_location", "region", "role_arn"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to AwsS3SettingsConfig
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!AwsS3SettingsConfig.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in AwsS3SettingsConfig is not found in the empty JSON string", AwsS3SettingsConfig.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!AwsS3SettingsConfig.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `AwsS3SettingsConfig` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("bucket") != null && !jsonObj.get("bucket").isJsonNull()) && !jsonObj.get("bucket").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `bucket` to be a primitive type in the JSON string but got `%s`", jsonObj.get("bucket").toString()));
      }
      if ((jsonObj.get("compression") != null && !jsonObj.get("compression").isJsonNull()) && !jsonObj.get("compression").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `compression` to be a primitive type in the JSON string but got `%s`", jsonObj.get("compression").toString()));
      }
      if ((jsonObj.get("format") != null && !jsonObj.get("format").isJsonNull()) && !jsonObj.get("format").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `format` to be a primitive type in the JSON string but got `%s`", jsonObj.get("format").toString()));
      }
      if ((jsonObj.get("partition_format") != null && !jsonObj.get("partition_format").isJsonNull()) && !jsonObj.get("partition_format").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `partition_format` to be a primitive type in the JSON string but got `%s`", jsonObj.get("partition_format").toString()));
      }
      if ((jsonObj.get("prefix") != null && !jsonObj.get("prefix").isJsonNull()) && !jsonObj.get("prefix").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `prefix` to be a primitive type in the JSON string but got `%s`", jsonObj.get("prefix").toString()));
      }
      if ((jsonObj.get("record_location") != null && !jsonObj.get("record_location").isJsonNull()) && !jsonObj.get("record_location").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `record_location` to be a primitive type in the JSON string but got `%s`", jsonObj.get("record_location").toString()));
      }
      if ((jsonObj.get("region") != null && !jsonObj.get("region").isJsonNull()) && !jsonObj.get("region").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `region` to be a primitive type in the JSON string but got `%s`", jsonObj.get("region").toString()));
      }
      if ((jsonObj.get("role_arn") != null && !jsonObj.get("role_arn").isJsonNull()) && !jsonObj.get("role_arn").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `role_arn` to be a primitive type in the JSON string but got `%s`", jsonObj.get("role_arn").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!AwsS3SettingsConfig.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'AwsS3SettingsConfig' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<AwsS3SettingsConfig> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(AwsS3SettingsConfig.class));

       return (TypeAdapter<T>) new TypeAdapter<AwsS3SettingsConfig>() {
           @Override
           public void write(JsonWriter out, AwsS3SettingsConfig value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public AwsS3SettingsConfig read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of AwsS3SettingsConfig given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of AwsS3SettingsConfig
   * @throws IOException if the JSON string is invalid with respect to AwsS3SettingsConfig
   */
  public static AwsS3SettingsConfig fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, AwsS3SettingsConfig.class);
  }

  /**
   * Convert an instance of AwsS3SettingsConfig to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

