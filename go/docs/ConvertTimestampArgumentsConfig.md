# ConvertTimestampArgumentsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceFormat** | Pointer to **string** | Required: Format of source timestamp | [optional] 
**SourceFormatCustom** | Pointer to **string** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**SourceKey** | Pointer to **string** | Required: JSONPath to source timestamp field | [optional] 
**SourceTimezone** | Pointer to **string** | Optional: Source timezone (default: UTC) | [optional] 
**TargetFormat** | Pointer to **string** | Required: Format of source timestamp | [optional] 
**TargetFormatCustom** | Pointer to **string** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**TargetKey** | Pointer to **string** | Optional: Target field (if empty, overwrites SourceKey) | [optional] 
**TargetTimezone** | Pointer to **string** | Optional: Target timezone (default: UTC) | [optional] 

## Methods

### NewConvertTimestampArgumentsConfig

`func NewConvertTimestampArgumentsConfig() *ConvertTimestampArgumentsConfig`

NewConvertTimestampArgumentsConfig instantiates a new ConvertTimestampArgumentsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConvertTimestampArgumentsConfigWithDefaults

`func NewConvertTimestampArgumentsConfigWithDefaults() *ConvertTimestampArgumentsConfig`

NewConvertTimestampArgumentsConfigWithDefaults instantiates a new ConvertTimestampArgumentsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceFormat

`func (o *ConvertTimestampArgumentsConfig) GetSourceFormat() string`

GetSourceFormat returns the SourceFormat field if non-nil, zero value otherwise.

### GetSourceFormatOk

`func (o *ConvertTimestampArgumentsConfig) GetSourceFormatOk() (*string, bool)`

GetSourceFormatOk returns a tuple with the SourceFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceFormat

`func (o *ConvertTimestampArgumentsConfig) SetSourceFormat(v string)`

SetSourceFormat sets SourceFormat field to given value.

### HasSourceFormat

`func (o *ConvertTimestampArgumentsConfig) HasSourceFormat() bool`

HasSourceFormat returns a boolean if a field has been set.

### GetSourceFormatCustom

`func (o *ConvertTimestampArgumentsConfig) GetSourceFormatCustom() string`

GetSourceFormatCustom returns the SourceFormatCustom field if non-nil, zero value otherwise.

### GetSourceFormatCustomOk

`func (o *ConvertTimestampArgumentsConfig) GetSourceFormatCustomOk() (*string, bool)`

GetSourceFormatCustomOk returns a tuple with the SourceFormatCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceFormatCustom

`func (o *ConvertTimestampArgumentsConfig) SetSourceFormatCustom(v string)`

SetSourceFormatCustom sets SourceFormatCustom field to given value.

### HasSourceFormatCustom

`func (o *ConvertTimestampArgumentsConfig) HasSourceFormatCustom() bool`

HasSourceFormatCustom returns a boolean if a field has been set.

### GetSourceKey

`func (o *ConvertTimestampArgumentsConfig) GetSourceKey() string`

GetSourceKey returns the SourceKey field if non-nil, zero value otherwise.

### GetSourceKeyOk

`func (o *ConvertTimestampArgumentsConfig) GetSourceKeyOk() (*string, bool)`

GetSourceKeyOk returns a tuple with the SourceKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceKey

`func (o *ConvertTimestampArgumentsConfig) SetSourceKey(v string)`

SetSourceKey sets SourceKey field to given value.

### HasSourceKey

`func (o *ConvertTimestampArgumentsConfig) HasSourceKey() bool`

HasSourceKey returns a boolean if a field has been set.

### GetSourceTimezone

`func (o *ConvertTimestampArgumentsConfig) GetSourceTimezone() string`

GetSourceTimezone returns the SourceTimezone field if non-nil, zero value otherwise.

### GetSourceTimezoneOk

`func (o *ConvertTimestampArgumentsConfig) GetSourceTimezoneOk() (*string, bool)`

GetSourceTimezoneOk returns a tuple with the SourceTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTimezone

`func (o *ConvertTimestampArgumentsConfig) SetSourceTimezone(v string)`

SetSourceTimezone sets SourceTimezone field to given value.

### HasSourceTimezone

`func (o *ConvertTimestampArgumentsConfig) HasSourceTimezone() bool`

HasSourceTimezone returns a boolean if a field has been set.

### GetTargetFormat

`func (o *ConvertTimestampArgumentsConfig) GetTargetFormat() string`

GetTargetFormat returns the TargetFormat field if non-nil, zero value otherwise.

### GetTargetFormatOk

`func (o *ConvertTimestampArgumentsConfig) GetTargetFormatOk() (*string, bool)`

GetTargetFormatOk returns a tuple with the TargetFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFormat

`func (o *ConvertTimestampArgumentsConfig) SetTargetFormat(v string)`

SetTargetFormat sets TargetFormat field to given value.

### HasTargetFormat

`func (o *ConvertTimestampArgumentsConfig) HasTargetFormat() bool`

HasTargetFormat returns a boolean if a field has been set.

### GetTargetFormatCustom

`func (o *ConvertTimestampArgumentsConfig) GetTargetFormatCustom() string`

GetTargetFormatCustom returns the TargetFormatCustom field if non-nil, zero value otherwise.

### GetTargetFormatCustomOk

`func (o *ConvertTimestampArgumentsConfig) GetTargetFormatCustomOk() (*string, bool)`

GetTargetFormatCustomOk returns a tuple with the TargetFormatCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFormatCustom

`func (o *ConvertTimestampArgumentsConfig) SetTargetFormatCustom(v string)`

SetTargetFormatCustom sets TargetFormatCustom field to given value.

### HasTargetFormatCustom

`func (o *ConvertTimestampArgumentsConfig) HasTargetFormatCustom() bool`

HasTargetFormatCustom returns a boolean if a field has been set.

### GetTargetKey

`func (o *ConvertTimestampArgumentsConfig) GetTargetKey() string`

GetTargetKey returns the TargetKey field if non-nil, zero value otherwise.

### GetTargetKeyOk

`func (o *ConvertTimestampArgumentsConfig) GetTargetKeyOk() (*string, bool)`

GetTargetKeyOk returns a tuple with the TargetKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetKey

`func (o *ConvertTimestampArgumentsConfig) SetTargetKey(v string)`

SetTargetKey sets TargetKey field to given value.

### HasTargetKey

`func (o *ConvertTimestampArgumentsConfig) HasTargetKey() bool`

HasTargetKey returns a boolean if a field has been set.

### GetTargetTimezone

`func (o *ConvertTimestampArgumentsConfig) GetTargetTimezone() string`

GetTargetTimezone returns the TargetTimezone field if non-nil, zero value otherwise.

### GetTargetTimezoneOk

`func (o *ConvertTimestampArgumentsConfig) GetTargetTimezoneOk() (*string, bool)`

GetTargetTimezoneOk returns a tuple with the TargetTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetTimezone

`func (o *ConvertTimestampArgumentsConfig) SetTargetTimezone(v string)`

SetTargetTimezone sets TargetTimezone field to given value.

### HasTargetTimezone

`func (o *ConvertTimestampArgumentsConfig) HasTargetTimezone() bool`

HasTargetTimezone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


