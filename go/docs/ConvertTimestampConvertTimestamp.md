# ConvertTimestampConvertTimestamp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceFormat** | Pointer to **string** | Required: Format of source timestamp | [optional] 
**SourceFormatCustom** | Pointer to **string** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**SourceKey** | Pointer to **string** | Required: JSONPath to source timestamp field | [optional] 
**SourceTimezone** | Pointer to **string** | Optional: Source timezone (default: UTC) | [optional] 
**TargetFormat** | Pointer to **string** | Required: Target format | [optional] 
**TargetFormatCustom** | Pointer to **string** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**TargetKey** | Pointer to **string** | Optional: Target field (if empty, overwrites SourceKey) | [optional] 
**TargetTimezone** | Pointer to **string** | Optional: Target timezone (default: UTC) | [optional] 

## Methods

### NewConvertTimestampConvertTimestamp

`func NewConvertTimestampConvertTimestamp() *ConvertTimestampConvertTimestamp`

NewConvertTimestampConvertTimestamp instantiates a new ConvertTimestampConvertTimestamp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConvertTimestampConvertTimestampWithDefaults

`func NewConvertTimestampConvertTimestampWithDefaults() *ConvertTimestampConvertTimestamp`

NewConvertTimestampConvertTimestampWithDefaults instantiates a new ConvertTimestampConvertTimestamp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceFormat

`func (o *ConvertTimestampConvertTimestamp) GetSourceFormat() string`

GetSourceFormat returns the SourceFormat field if non-nil, zero value otherwise.

### GetSourceFormatOk

`func (o *ConvertTimestampConvertTimestamp) GetSourceFormatOk() (*string, bool)`

GetSourceFormatOk returns a tuple with the SourceFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceFormat

`func (o *ConvertTimestampConvertTimestamp) SetSourceFormat(v string)`

SetSourceFormat sets SourceFormat field to given value.

### HasSourceFormat

`func (o *ConvertTimestampConvertTimestamp) HasSourceFormat() bool`

HasSourceFormat returns a boolean if a field has been set.

### GetSourceFormatCustom

`func (o *ConvertTimestampConvertTimestamp) GetSourceFormatCustom() string`

GetSourceFormatCustom returns the SourceFormatCustom field if non-nil, zero value otherwise.

### GetSourceFormatCustomOk

`func (o *ConvertTimestampConvertTimestamp) GetSourceFormatCustomOk() (*string, bool)`

GetSourceFormatCustomOk returns a tuple with the SourceFormatCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceFormatCustom

`func (o *ConvertTimestampConvertTimestamp) SetSourceFormatCustom(v string)`

SetSourceFormatCustom sets SourceFormatCustom field to given value.

### HasSourceFormatCustom

`func (o *ConvertTimestampConvertTimestamp) HasSourceFormatCustom() bool`

HasSourceFormatCustom returns a boolean if a field has been set.

### GetSourceKey

`func (o *ConvertTimestampConvertTimestamp) GetSourceKey() string`

GetSourceKey returns the SourceKey field if non-nil, zero value otherwise.

### GetSourceKeyOk

`func (o *ConvertTimestampConvertTimestamp) GetSourceKeyOk() (*string, bool)`

GetSourceKeyOk returns a tuple with the SourceKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceKey

`func (o *ConvertTimestampConvertTimestamp) SetSourceKey(v string)`

SetSourceKey sets SourceKey field to given value.

### HasSourceKey

`func (o *ConvertTimestampConvertTimestamp) HasSourceKey() bool`

HasSourceKey returns a boolean if a field has been set.

### GetSourceTimezone

`func (o *ConvertTimestampConvertTimestamp) GetSourceTimezone() string`

GetSourceTimezone returns the SourceTimezone field if non-nil, zero value otherwise.

### GetSourceTimezoneOk

`func (o *ConvertTimestampConvertTimestamp) GetSourceTimezoneOk() (*string, bool)`

GetSourceTimezoneOk returns a tuple with the SourceTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTimezone

`func (o *ConvertTimestampConvertTimestamp) SetSourceTimezone(v string)`

SetSourceTimezone sets SourceTimezone field to given value.

### HasSourceTimezone

`func (o *ConvertTimestampConvertTimestamp) HasSourceTimezone() bool`

HasSourceTimezone returns a boolean if a field has been set.

### GetTargetFormat

`func (o *ConvertTimestampConvertTimestamp) GetTargetFormat() string`

GetTargetFormat returns the TargetFormat field if non-nil, zero value otherwise.

### GetTargetFormatOk

`func (o *ConvertTimestampConvertTimestamp) GetTargetFormatOk() (*string, bool)`

GetTargetFormatOk returns a tuple with the TargetFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFormat

`func (o *ConvertTimestampConvertTimestamp) SetTargetFormat(v string)`

SetTargetFormat sets TargetFormat field to given value.

### HasTargetFormat

`func (o *ConvertTimestampConvertTimestamp) HasTargetFormat() bool`

HasTargetFormat returns a boolean if a field has been set.

### GetTargetFormatCustom

`func (o *ConvertTimestampConvertTimestamp) GetTargetFormatCustom() string`

GetTargetFormatCustom returns the TargetFormatCustom field if non-nil, zero value otherwise.

### GetTargetFormatCustomOk

`func (o *ConvertTimestampConvertTimestamp) GetTargetFormatCustomOk() (*string, bool)`

GetTargetFormatCustomOk returns a tuple with the TargetFormatCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFormatCustom

`func (o *ConvertTimestampConvertTimestamp) SetTargetFormatCustom(v string)`

SetTargetFormatCustom sets TargetFormatCustom field to given value.

### HasTargetFormatCustom

`func (o *ConvertTimestampConvertTimestamp) HasTargetFormatCustom() bool`

HasTargetFormatCustom returns a boolean if a field has been set.

### GetTargetKey

`func (o *ConvertTimestampConvertTimestamp) GetTargetKey() string`

GetTargetKey returns the TargetKey field if non-nil, zero value otherwise.

### GetTargetKeyOk

`func (o *ConvertTimestampConvertTimestamp) GetTargetKeyOk() (*string, bool)`

GetTargetKeyOk returns a tuple with the TargetKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetKey

`func (o *ConvertTimestampConvertTimestamp) SetTargetKey(v string)`

SetTargetKey sets TargetKey field to given value.

### HasTargetKey

`func (o *ConvertTimestampConvertTimestamp) HasTargetKey() bool`

HasTargetKey returns a boolean if a field has been set.

### GetTargetTimezone

`func (o *ConvertTimestampConvertTimestamp) GetTargetTimezone() string`

GetTargetTimezone returns the TargetTimezone field if non-nil, zero value otherwise.

### GetTargetTimezoneOk

`func (o *ConvertTimestampConvertTimestamp) GetTargetTimezoneOk() (*string, bool)`

GetTargetTimezoneOk returns a tuple with the TargetTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetTimezone

`func (o *ConvertTimestampConvertTimestamp) SetTargetTimezone(v string)`

SetTargetTimezone sets TargetTimezone field to given value.

### HasTargetTimezone

`func (o *ConvertTimestampConvertTimestamp) HasTargetTimezone() bool`

HasTargetTimezone returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


