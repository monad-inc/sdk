# CloudResourceInventorySettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudPlatform** | Pointer to **[]string** | Cloud Platform types for Wiz. Ex: &#39;AWS&#39;, &#39;AZURE&#39;, &#39;GCP&#39;. | [optional] 
**EndpointUrl** | Pointer to **string** | Endpoint URL for the Wiz API. Ex: &#39;https://api.wiz.io/v1/cloud-resource-inventory&#39;. | [optional] 
**EntityType** | Pointer to **[]string** | Entity types for Wiz. Ex: &#39;ACCOUNT&#39;, &#39;REGION&#39;, &#39;VPC&#39;, &#39;SUBNET&#39;, &#39;INSTANCE&#39;. | [optional] 

## Methods

### NewCloudResourceInventorySettingsConfig

`func NewCloudResourceInventorySettingsConfig() *CloudResourceInventorySettingsConfig`

NewCloudResourceInventorySettingsConfig instantiates a new CloudResourceInventorySettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudResourceInventorySettingsConfigWithDefaults

`func NewCloudResourceInventorySettingsConfigWithDefaults() *CloudResourceInventorySettingsConfig`

NewCloudResourceInventorySettingsConfigWithDefaults instantiates a new CloudResourceInventorySettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCloudPlatform

`func (o *CloudResourceInventorySettingsConfig) GetCloudPlatform() []string`

GetCloudPlatform returns the CloudPlatform field if non-nil, zero value otherwise.

### GetCloudPlatformOk

`func (o *CloudResourceInventorySettingsConfig) GetCloudPlatformOk() (*[]string, bool)`

GetCloudPlatformOk returns a tuple with the CloudPlatform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudPlatform

`func (o *CloudResourceInventorySettingsConfig) SetCloudPlatform(v []string)`

SetCloudPlatform sets CloudPlatform field to given value.

### HasCloudPlatform

`func (o *CloudResourceInventorySettingsConfig) HasCloudPlatform() bool`

HasCloudPlatform returns a boolean if a field has been set.

### GetEndpointUrl

`func (o *CloudResourceInventorySettingsConfig) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *CloudResourceInventorySettingsConfig) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *CloudResourceInventorySettingsConfig) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.

### HasEndpointUrl

`func (o *CloudResourceInventorySettingsConfig) HasEndpointUrl() bool`

HasEndpointUrl returns a boolean if a field has been set.

### GetEntityType

`func (o *CloudResourceInventorySettingsConfig) GetEntityType() []string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *CloudResourceInventorySettingsConfig) GetEntityTypeOk() (*[]string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *CloudResourceInventorySettingsConfig) SetEntityType(v []string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *CloudResourceInventorySettingsConfig) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


