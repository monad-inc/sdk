# CloudflareHttpRequestsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Fields** | Pointer to **[]string** | Fields to include in the query. Leave empty to use default curated list. Only fields available to your account will be included (validated against API). Maximum 50 fields due to API constraints. | [optional] 
**LookbackDuration** | Pointer to **string** | Initial lookback duration for first sync (e.g., \&quot;24h\&quot;, \&quot;7d\&quot;). Respects API retention limits. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 
**ZoneId** | Pointer to **string** | Cloudflare Zone ID | [optional] 

## Methods

### NewCloudflareHttpRequestsSettingsConfig

`func NewCloudflareHttpRequestsSettingsConfig() *CloudflareHttpRequestsSettingsConfig`

NewCloudflareHttpRequestsSettingsConfig instantiates a new CloudflareHttpRequestsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudflareHttpRequestsSettingsConfigWithDefaults

`func NewCloudflareHttpRequestsSettingsConfigWithDefaults() *CloudflareHttpRequestsSettingsConfig`

NewCloudflareHttpRequestsSettingsConfigWithDefaults instantiates a new CloudflareHttpRequestsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFields

`func (o *CloudflareHttpRequestsSettingsConfig) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *CloudflareHttpRequestsSettingsConfig) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *CloudflareHttpRequestsSettingsConfig) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *CloudflareHttpRequestsSettingsConfig) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetLookbackDuration

`func (o *CloudflareHttpRequestsSettingsConfig) GetLookbackDuration() string`

GetLookbackDuration returns the LookbackDuration field if non-nil, zero value otherwise.

### GetLookbackDurationOk

`func (o *CloudflareHttpRequestsSettingsConfig) GetLookbackDurationOk() (*string, bool)`

GetLookbackDurationOk returns a tuple with the LookbackDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLookbackDuration

`func (o *CloudflareHttpRequestsSettingsConfig) SetLookbackDuration(v string)`

SetLookbackDuration sets LookbackDuration field to given value.

### HasLookbackDuration

`func (o *CloudflareHttpRequestsSettingsConfig) HasLookbackDuration() bool`

HasLookbackDuration returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudflareHttpRequestsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudflareHttpRequestsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudflareHttpRequestsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudflareHttpRequestsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.

### GetZoneId

`func (o *CloudflareHttpRequestsSettingsConfig) GetZoneId() string`

GetZoneId returns the ZoneId field if non-nil, zero value otherwise.

### GetZoneIdOk

`func (o *CloudflareHttpRequestsSettingsConfig) GetZoneIdOk() (*string, bool)`

GetZoneIdOk returns a tuple with the ZoneId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZoneId

`func (o *CloudflareHttpRequestsSettingsConfig) SetZoneId(v string)`

SetZoneId sets ZoneId field to given value.

### HasZoneId

`func (o *CloudflareHttpRequestsSettingsConfig) HasZoneId() bool`

HasZoneId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


