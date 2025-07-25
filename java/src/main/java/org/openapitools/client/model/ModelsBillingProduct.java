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
 * ModelsBillingProduct
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-07-25T17:57:16.953077963Z[Etc/UTC]", comments = "Generator version: 7.14.0")
public class ModelsBillingProduct {
  public static final String SERIALIZED_NAME_CONTACT_EMAIL = "contact_email";
  @SerializedName(SERIALIZED_NAME_CONTACT_EMAIL)
  @javax.annotation.Nullable
  private String contactEmail;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  @javax.annotation.Nullable
  private String createdAt;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  @javax.annotation.Nullable
  private String description;

  public static final String SERIALIZED_NAME_FEATURES = "features";
  @SerializedName(SERIALIZED_NAME_FEATURES)
  @javax.annotation.Nullable
  private List<String> features = new ArrayList<>();

  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  @javax.annotation.Nullable
  private String id;

  public static final String SERIALIZED_NAME_IS_DEFAULT = "is_default";
  @SerializedName(SERIALIZED_NAME_IS_DEFAULT)
  @javax.annotation.Nullable
  private Boolean isDefault;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  @javax.annotation.Nullable
  private String name;

  public static final String SERIALIZED_NAME_PRODUCT_TYPE = "product_type";
  @SerializedName(SERIALIZED_NAME_PRODUCT_TYPE)
  @javax.annotation.Nullable
  private String productType;

  public static final String SERIALIZED_NAME_RECURRING_COST_CENTS = "recurring_cost_cents";
  @SerializedName(SERIALIZED_NAME_RECURRING_COST_CENTS)
  @javax.annotation.Nullable
  private Integer recurringCostCents;

  public static final String SERIALIZED_NAME_RECURRING_FREQUENCY = "recurring_frequency";
  @SerializedName(SERIALIZED_NAME_RECURRING_FREQUENCY)
  @javax.annotation.Nullable
  private String recurringFrequency;

  public static final String SERIALIZED_NAME_SLUG = "slug";
  @SerializedName(SERIALIZED_NAME_SLUG)
  @javax.annotation.Nullable
  private String slug;

  public static final String SERIALIZED_NAME_UPDATED_AT = "updated_at";
  @SerializedName(SERIALIZED_NAME_UPDATED_AT)
  @javax.annotation.Nullable
  private String updatedAt;

  public static final String SERIALIZED_NAME_USAGE_UNIT = "usage_unit";
  @SerializedName(SERIALIZED_NAME_USAGE_UNIT)
  @javax.annotation.Nullable
  private String usageUnit;

  public static final String SERIALIZED_NAME_USAGE_UNIT_COST_CENTS = "usage_unit_cost_cents";
  @SerializedName(SERIALIZED_NAME_USAGE_UNIT_COST_CENTS)
  @javax.annotation.Nullable
  private Integer usageUnitCostCents;

  public ModelsBillingProduct() {
  }

  public ModelsBillingProduct contactEmail(@javax.annotation.Nullable String contactEmail) {
    this.contactEmail = contactEmail;
    return this;
  }

  /**
   * Get contactEmail
   * @return contactEmail
   */
  @javax.annotation.Nullable
  public String getContactEmail() {
    return contactEmail;
  }

  public void setContactEmail(@javax.annotation.Nullable String contactEmail) {
    this.contactEmail = contactEmail;
  }


  public ModelsBillingProduct createdAt(@javax.annotation.Nullable String createdAt) {
    this.createdAt = createdAt;
    return this;
  }

  /**
   * Get createdAt
   * @return createdAt
   */
  @javax.annotation.Nullable
  public String getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(@javax.annotation.Nullable String createdAt) {
    this.createdAt = createdAt;
  }


  public ModelsBillingProduct description(@javax.annotation.Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @javax.annotation.Nullable
  public String getDescription() {
    return description;
  }

  public void setDescription(@javax.annotation.Nullable String description) {
    this.description = description;
  }


  public ModelsBillingProduct features(@javax.annotation.Nullable List<String> features) {
    this.features = features;
    return this;
  }

  public ModelsBillingProduct addFeaturesItem(String featuresItem) {
    if (this.features == null) {
      this.features = new ArrayList<>();
    }
    this.features.add(featuresItem);
    return this;
  }

  /**
   * Get features
   * @return features
   */
  @javax.annotation.Nullable
  public List<String> getFeatures() {
    return features;
  }

  public void setFeatures(@javax.annotation.Nullable List<String> features) {
    this.features = features;
  }


  public ModelsBillingProduct id(@javax.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @javax.annotation.Nullable
  public String getId() {
    return id;
  }

  public void setId(@javax.annotation.Nullable String id) {
    this.id = id;
  }


  public ModelsBillingProduct isDefault(@javax.annotation.Nullable Boolean isDefault) {
    this.isDefault = isDefault;
    return this;
  }

  /**
   * Get isDefault
   * @return isDefault
   */
  @javax.annotation.Nullable
  public Boolean getIsDefault() {
    return isDefault;
  }

  public void setIsDefault(@javax.annotation.Nullable Boolean isDefault) {
    this.isDefault = isDefault;
  }


  public ModelsBillingProduct name(@javax.annotation.Nullable String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @javax.annotation.Nullable
  public String getName() {
    return name;
  }

  public void setName(@javax.annotation.Nullable String name) {
    this.name = name;
  }


  public ModelsBillingProduct productType(@javax.annotation.Nullable String productType) {
    this.productType = productType;
    return this;
  }

  /**
   * Get productType
   * @return productType
   */
  @javax.annotation.Nullable
  public String getProductType() {
    return productType;
  }

  public void setProductType(@javax.annotation.Nullable String productType) {
    this.productType = productType;
  }


  public ModelsBillingProduct recurringCostCents(@javax.annotation.Nullable Integer recurringCostCents) {
    this.recurringCostCents = recurringCostCents;
    return this;
  }

  /**
   * Get recurringCostCents
   * @return recurringCostCents
   */
  @javax.annotation.Nullable
  public Integer getRecurringCostCents() {
    return recurringCostCents;
  }

  public void setRecurringCostCents(@javax.annotation.Nullable Integer recurringCostCents) {
    this.recurringCostCents = recurringCostCents;
  }


  public ModelsBillingProduct recurringFrequency(@javax.annotation.Nullable String recurringFrequency) {
    this.recurringFrequency = recurringFrequency;
    return this;
  }

  /**
   * Get recurringFrequency
   * @return recurringFrequency
   */
  @javax.annotation.Nullable
  public String getRecurringFrequency() {
    return recurringFrequency;
  }

  public void setRecurringFrequency(@javax.annotation.Nullable String recurringFrequency) {
    this.recurringFrequency = recurringFrequency;
  }


  public ModelsBillingProduct slug(@javax.annotation.Nullable String slug) {
    this.slug = slug;
    return this;
  }

  /**
   * Get slug
   * @return slug
   */
  @javax.annotation.Nullable
  public String getSlug() {
    return slug;
  }

  public void setSlug(@javax.annotation.Nullable String slug) {
    this.slug = slug;
  }


  public ModelsBillingProduct updatedAt(@javax.annotation.Nullable String updatedAt) {
    this.updatedAt = updatedAt;
    return this;
  }

  /**
   * Get updatedAt
   * @return updatedAt
   */
  @javax.annotation.Nullable
  public String getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(@javax.annotation.Nullable String updatedAt) {
    this.updatedAt = updatedAt;
  }


  public ModelsBillingProduct usageUnit(@javax.annotation.Nullable String usageUnit) {
    this.usageUnit = usageUnit;
    return this;
  }

  /**
   * Get usageUnit
   * @return usageUnit
   */
  @javax.annotation.Nullable
  public String getUsageUnit() {
    return usageUnit;
  }

  public void setUsageUnit(@javax.annotation.Nullable String usageUnit) {
    this.usageUnit = usageUnit;
  }


  public ModelsBillingProduct usageUnitCostCents(@javax.annotation.Nullable Integer usageUnitCostCents) {
    this.usageUnitCostCents = usageUnitCostCents;
    return this;
  }

  /**
   * Get usageUnitCostCents
   * @return usageUnitCostCents
   */
  @javax.annotation.Nullable
  public Integer getUsageUnitCostCents() {
    return usageUnitCostCents;
  }

  public void setUsageUnitCostCents(@javax.annotation.Nullable Integer usageUnitCostCents) {
    this.usageUnitCostCents = usageUnitCostCents;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModelsBillingProduct modelsBillingProduct = (ModelsBillingProduct) o;
    return Objects.equals(this.contactEmail, modelsBillingProduct.contactEmail) &&
        Objects.equals(this.createdAt, modelsBillingProduct.createdAt) &&
        Objects.equals(this.description, modelsBillingProduct.description) &&
        Objects.equals(this.features, modelsBillingProduct.features) &&
        Objects.equals(this.id, modelsBillingProduct.id) &&
        Objects.equals(this.isDefault, modelsBillingProduct.isDefault) &&
        Objects.equals(this.name, modelsBillingProduct.name) &&
        Objects.equals(this.productType, modelsBillingProduct.productType) &&
        Objects.equals(this.recurringCostCents, modelsBillingProduct.recurringCostCents) &&
        Objects.equals(this.recurringFrequency, modelsBillingProduct.recurringFrequency) &&
        Objects.equals(this.slug, modelsBillingProduct.slug) &&
        Objects.equals(this.updatedAt, modelsBillingProduct.updatedAt) &&
        Objects.equals(this.usageUnit, modelsBillingProduct.usageUnit) &&
        Objects.equals(this.usageUnitCostCents, modelsBillingProduct.usageUnitCostCents);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contactEmail, createdAt, description, features, id, isDefault, name, productType, recurringCostCents, recurringFrequency, slug, updatedAt, usageUnit, usageUnitCostCents);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelsBillingProduct {\n");
    sb.append("    contactEmail: ").append(toIndentedString(contactEmail)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    features: ").append(toIndentedString(features)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isDefault: ").append(toIndentedString(isDefault)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    productType: ").append(toIndentedString(productType)).append("\n");
    sb.append("    recurringCostCents: ").append(toIndentedString(recurringCostCents)).append("\n");
    sb.append("    recurringFrequency: ").append(toIndentedString(recurringFrequency)).append("\n");
    sb.append("    slug: ").append(toIndentedString(slug)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    usageUnit: ").append(toIndentedString(usageUnit)).append("\n");
    sb.append("    usageUnitCostCents: ").append(toIndentedString(usageUnitCostCents)).append("\n");
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
    openapiFields = new HashSet<String>(Arrays.asList("contact_email", "created_at", "description", "features", "id", "is_default", "name", "product_type", "recurring_cost_cents", "recurring_frequency", "slug", "updated_at", "usage_unit", "usage_unit_cost_cents"));

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>(0);
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to ModelsBillingProduct
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!ModelsBillingProduct.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in ModelsBillingProduct is not found in the empty JSON string", ModelsBillingProduct.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!ModelsBillingProduct.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `ModelsBillingProduct` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("contact_email") != null && !jsonObj.get("contact_email").isJsonNull()) && !jsonObj.get("contact_email").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `contact_email` to be a primitive type in the JSON string but got `%s`", jsonObj.get("contact_email").toString()));
      }
      if ((jsonObj.get("created_at") != null && !jsonObj.get("created_at").isJsonNull()) && !jsonObj.get("created_at").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `created_at` to be a primitive type in the JSON string but got `%s`", jsonObj.get("created_at").toString()));
      }
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      // ensure the optional json data is an array if present
      if (jsonObj.get("features") != null && !jsonObj.get("features").isJsonNull() && !jsonObj.get("features").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `features` to be an array in the JSON string but got `%s`", jsonObj.get("features").toString()));
      }
      if ((jsonObj.get("id") != null && !jsonObj.get("id").isJsonNull()) && !jsonObj.get("id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("id").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("product_type") != null && !jsonObj.get("product_type").isJsonNull()) && !jsonObj.get("product_type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `product_type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("product_type").toString()));
      }
      if ((jsonObj.get("recurring_frequency") != null && !jsonObj.get("recurring_frequency").isJsonNull()) && !jsonObj.get("recurring_frequency").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `recurring_frequency` to be a primitive type in the JSON string but got `%s`", jsonObj.get("recurring_frequency").toString()));
      }
      if ((jsonObj.get("slug") != null && !jsonObj.get("slug").isJsonNull()) && !jsonObj.get("slug").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `slug` to be a primitive type in the JSON string but got `%s`", jsonObj.get("slug").toString()));
      }
      if ((jsonObj.get("updated_at") != null && !jsonObj.get("updated_at").isJsonNull()) && !jsonObj.get("updated_at").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `updated_at` to be a primitive type in the JSON string but got `%s`", jsonObj.get("updated_at").toString()));
      }
      if ((jsonObj.get("usage_unit") != null && !jsonObj.get("usage_unit").isJsonNull()) && !jsonObj.get("usage_unit").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `usage_unit` to be a primitive type in the JSON string but got `%s`", jsonObj.get("usage_unit").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!ModelsBillingProduct.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'ModelsBillingProduct' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<ModelsBillingProduct> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(ModelsBillingProduct.class));

       return (TypeAdapter<T>) new TypeAdapter<ModelsBillingProduct>() {
           @Override
           public void write(JsonWriter out, ModelsBillingProduct value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public ModelsBillingProduct read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of ModelsBillingProduct given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of ModelsBillingProduct
   * @throws IOException if the JSON string is invalid with respect to ModelsBillingProduct
   */
  public static ModelsBillingProduct fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, ModelsBillingProduct.class);
  }

  /**
   * Convert an instance of ModelsBillingProduct to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

