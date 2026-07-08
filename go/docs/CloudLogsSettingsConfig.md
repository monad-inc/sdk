# CloudLogsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnableProtoPayloadParsing** | Pointer to **bool** | Enables automatic parsing of embedded protocol buffer payloads within the input. | [optional] 
**Filter** | Pointer to **string** | The filter to apply to the logs. | [optional] 
**ResourceNames** | Pointer to **[]string** | The resources to query logs from. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewCloudLogsSettingsConfig

`func NewCloudLogsSettingsConfig() *CloudLogsSettingsConfig`

NewCloudLogsSettingsConfig instantiates a new CloudLogsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudLogsSettingsConfigWithDefaults

`func NewCloudLogsSettingsConfigWithDefaults() *CloudLogsSettingsConfig`

NewCloudLogsSettingsConfigWithDefaults instantiates a new CloudLogsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnableProtoPayloadParsing

`func (o *CloudLogsSettingsConfig) GetEnableProtoPayloadParsing() bool`

GetEnableProtoPayloadParsing returns the EnableProtoPayloadParsing field if non-nil, zero value otherwise.

### GetEnableProtoPayloadParsingOk

`func (o *CloudLogsSettingsConfig) GetEnableProtoPayloadParsingOk() (*bool, bool)`

GetEnableProtoPayloadParsingOk returns a tuple with the EnableProtoPayloadParsing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableProtoPayloadParsing

`func (o *CloudLogsSettingsConfig) SetEnableProtoPayloadParsing(v bool)`

SetEnableProtoPayloadParsing sets EnableProtoPayloadParsing field to given value.

### HasEnableProtoPayloadParsing

`func (o *CloudLogsSettingsConfig) HasEnableProtoPayloadParsing() bool`

HasEnableProtoPayloadParsing returns a boolean if a field has been set.

### GetFilter

`func (o *CloudLogsSettingsConfig) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *CloudLogsSettingsConfig) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *CloudLogsSettingsConfig) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *CloudLogsSettingsConfig) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetResourceNames

`func (o *CloudLogsSettingsConfig) GetResourceNames() []string`

GetResourceNames returns the ResourceNames field if non-nil, zero value otherwise.

### GetResourceNamesOk

`func (o *CloudLogsSettingsConfig) GetResourceNamesOk() (*[]string, bool)`

GetResourceNamesOk returns a tuple with the ResourceNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceNames

`func (o *CloudLogsSettingsConfig) SetResourceNames(v []string)`

SetResourceNames sets ResourceNames field to given value.

### HasResourceNames

`func (o *CloudLogsSettingsConfig) HasResourceNames() bool`

HasResourceNames returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudLogsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudLogsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudLogsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudLogsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


