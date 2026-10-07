# XsiamSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowInsecure** | Pointer to **bool** | Skip TLS verification. Not recommended outside local testing. | [optional] 
**ApiKey** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**EnableCompression** | Pointer to **bool** | By default the connector gzips the request body and sends &#x60;Content-Encoding: gzip&#x60;. Set true to send uncompressed instead. This MUST match the HTTP Log Collector&#39;s Compression setting in the XSIAM UI. | [optional] 
**TenantFqdn** | **string** | The XSIAM tenant API FQDN, hostname only (no scheme, no path). | 

## Methods

### NewXsiamSettingsConfig

`func NewXsiamSettingsConfig(tenantFqdn string, ) *XsiamSettingsConfig`

NewXsiamSettingsConfig instantiates a new XsiamSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewXsiamSettingsConfigWithDefaults

`func NewXsiamSettingsConfigWithDefaults() *XsiamSettingsConfig`

NewXsiamSettingsConfigWithDefaults instantiates a new XsiamSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowInsecure

`func (o *XsiamSettingsConfig) GetAllowInsecure() bool`

GetAllowInsecure returns the AllowInsecure field if non-nil, zero value otherwise.

### GetAllowInsecureOk

`func (o *XsiamSettingsConfig) GetAllowInsecureOk() (*bool, bool)`

GetAllowInsecureOk returns a tuple with the AllowInsecure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowInsecure

`func (o *XsiamSettingsConfig) SetAllowInsecure(v bool)`

SetAllowInsecure sets AllowInsecure field to given value.

### HasAllowInsecure

`func (o *XsiamSettingsConfig) HasAllowInsecure() bool`

HasAllowInsecure returns a boolean if a field has been set.

### GetApiKey

`func (o *XsiamSettingsConfig) GetApiKey() ModelsSecret`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *XsiamSettingsConfig) GetApiKeyOk() (*ModelsSecret, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *XsiamSettingsConfig) SetApiKey(v ModelsSecret)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *XsiamSettingsConfig) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetEnableCompression

`func (o *XsiamSettingsConfig) GetEnableCompression() bool`

GetEnableCompression returns the EnableCompression field if non-nil, zero value otherwise.

### GetEnableCompressionOk

`func (o *XsiamSettingsConfig) GetEnableCompressionOk() (*bool, bool)`

GetEnableCompressionOk returns a tuple with the EnableCompression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableCompression

`func (o *XsiamSettingsConfig) SetEnableCompression(v bool)`

SetEnableCompression sets EnableCompression field to given value.

### HasEnableCompression

`func (o *XsiamSettingsConfig) HasEnableCompression() bool`

HasEnableCompression returns a boolean if a field has been set.

### GetTenantFqdn

`func (o *XsiamSettingsConfig) GetTenantFqdn() string`

GetTenantFqdn returns the TenantFqdn field if non-nil, zero value otherwise.

### GetTenantFqdnOk

`func (o *XsiamSettingsConfig) GetTenantFqdnOk() (*string, bool)`

GetTenantFqdnOk returns a tuple with the TenantFqdn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantFqdn

`func (o *XsiamSettingsConfig) SetTenantFqdn(v string)`

SetTenantFqdn sets TenantFqdn field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


