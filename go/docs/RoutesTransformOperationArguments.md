# RoutesTransformOperationArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The key to store the timestamp in | [optional] 
**Value** | Pointer to **interface{}** |  | [optional] 
**Type** | Pointer to **string** | The new type of the key | [optional] 
**SourceFormat** | Pointer to **string** | Required: Format of source timestamp | [optional] 
**SourceFormatCustom** | Pointer to **string** | Optional: Custom Go time layout (only if SourceFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**SourceKey** | Pointer to **string** | Required: JSONPath to source timestamp field | [optional] 
**SourceTimezone** | Pointer to **string** | Optional: Source timezone (default: UTC) | [optional] 
**TargetFormat** | Pointer to **string** | Required: Format of source timestamp | [optional] 
**TargetFormatCustom** | Pointer to **string** | Optional: Custom target format (only if TargetFormat &#x3D; \&quot;custom\&quot;) | [optional] 
**TargetKey** | Pointer to **string** | Optional: Target field (if empty, overwrites SourceKey) | [optional] 
**TargetTimezone** | Pointer to **string** | Optional: Target timezone (default: UTC) | [optional] 
**KeyToWatch** | Pointer to **string** | The key to watch for | [optional] 
**ValueToWatch** | Pointer to **interface{}** |  | [optional] 
**NewKey** | Pointer to **string** | The new key to rename to | [optional] 
**Delimiter** | Pointer to **string** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 | [optional] 
**Query** | Pointer to **string** | The raw query string from config | [optional] 
**ValueToSet** | Pointer to **interface{}** |  | [optional] 
**Format** | Pointer to **string** | The format of the timestamp | [optional] 

## Methods

### NewRoutesTransformOperationArguments

`func NewRoutesTransformOperationArguments() *RoutesTransformOperationArguments`

NewRoutesTransformOperationArguments instantiates a new RoutesTransformOperationArguments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesTransformOperationArgumentsWithDefaults

`func NewRoutesTransformOperationArgumentsWithDefaults() *RoutesTransformOperationArguments`

NewRoutesTransformOperationArgumentsWithDefaults instantiates a new RoutesTransformOperationArguments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *RoutesTransformOperationArguments) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *RoutesTransformOperationArguments) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *RoutesTransformOperationArguments) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *RoutesTransformOperationArguments) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetValue

`func (o *RoutesTransformOperationArguments) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *RoutesTransformOperationArguments) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *RoutesTransformOperationArguments) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *RoutesTransformOperationArguments) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *RoutesTransformOperationArguments) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *RoutesTransformOperationArguments) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetType

`func (o *RoutesTransformOperationArguments) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesTransformOperationArguments) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesTransformOperationArguments) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesTransformOperationArguments) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSourceFormat

`func (o *RoutesTransformOperationArguments) GetSourceFormat() string`

GetSourceFormat returns the SourceFormat field if non-nil, zero value otherwise.

### GetSourceFormatOk

`func (o *RoutesTransformOperationArguments) GetSourceFormatOk() (*string, bool)`

GetSourceFormatOk returns a tuple with the SourceFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceFormat

`func (o *RoutesTransformOperationArguments) SetSourceFormat(v string)`

SetSourceFormat sets SourceFormat field to given value.

### HasSourceFormat

`func (o *RoutesTransformOperationArguments) HasSourceFormat() bool`

HasSourceFormat returns a boolean if a field has been set.

### GetSourceFormatCustom

`func (o *RoutesTransformOperationArguments) GetSourceFormatCustom() string`

GetSourceFormatCustom returns the SourceFormatCustom field if non-nil, zero value otherwise.

### GetSourceFormatCustomOk

`func (o *RoutesTransformOperationArguments) GetSourceFormatCustomOk() (*string, bool)`

GetSourceFormatCustomOk returns a tuple with the SourceFormatCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceFormatCustom

`func (o *RoutesTransformOperationArguments) SetSourceFormatCustom(v string)`

SetSourceFormatCustom sets SourceFormatCustom field to given value.

### HasSourceFormatCustom

`func (o *RoutesTransformOperationArguments) HasSourceFormatCustom() bool`

HasSourceFormatCustom returns a boolean if a field has been set.

### GetSourceKey

`func (o *RoutesTransformOperationArguments) GetSourceKey() string`

GetSourceKey returns the SourceKey field if non-nil, zero value otherwise.

### GetSourceKeyOk

`func (o *RoutesTransformOperationArguments) GetSourceKeyOk() (*string, bool)`

GetSourceKeyOk returns a tuple with the SourceKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceKey

`func (o *RoutesTransformOperationArguments) SetSourceKey(v string)`

SetSourceKey sets SourceKey field to given value.

### HasSourceKey

`func (o *RoutesTransformOperationArguments) HasSourceKey() bool`

HasSourceKey returns a boolean if a field has been set.

### GetSourceTimezone

`func (o *RoutesTransformOperationArguments) GetSourceTimezone() string`

GetSourceTimezone returns the SourceTimezone field if non-nil, zero value otherwise.

### GetSourceTimezoneOk

`func (o *RoutesTransformOperationArguments) GetSourceTimezoneOk() (*string, bool)`

GetSourceTimezoneOk returns a tuple with the SourceTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTimezone

`func (o *RoutesTransformOperationArguments) SetSourceTimezone(v string)`

SetSourceTimezone sets SourceTimezone field to given value.

### HasSourceTimezone

`func (o *RoutesTransformOperationArguments) HasSourceTimezone() bool`

HasSourceTimezone returns a boolean if a field has been set.

### GetTargetFormat

`func (o *RoutesTransformOperationArguments) GetTargetFormat() string`

GetTargetFormat returns the TargetFormat field if non-nil, zero value otherwise.

### GetTargetFormatOk

`func (o *RoutesTransformOperationArguments) GetTargetFormatOk() (*string, bool)`

GetTargetFormatOk returns a tuple with the TargetFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFormat

`func (o *RoutesTransformOperationArguments) SetTargetFormat(v string)`

SetTargetFormat sets TargetFormat field to given value.

### HasTargetFormat

`func (o *RoutesTransformOperationArguments) HasTargetFormat() bool`

HasTargetFormat returns a boolean if a field has been set.

### GetTargetFormatCustom

`func (o *RoutesTransformOperationArguments) GetTargetFormatCustom() string`

GetTargetFormatCustom returns the TargetFormatCustom field if non-nil, zero value otherwise.

### GetTargetFormatCustomOk

`func (o *RoutesTransformOperationArguments) GetTargetFormatCustomOk() (*string, bool)`

GetTargetFormatCustomOk returns a tuple with the TargetFormatCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetFormatCustom

`func (o *RoutesTransformOperationArguments) SetTargetFormatCustom(v string)`

SetTargetFormatCustom sets TargetFormatCustom field to given value.

### HasTargetFormatCustom

`func (o *RoutesTransformOperationArguments) HasTargetFormatCustom() bool`

HasTargetFormatCustom returns a boolean if a field has been set.

### GetTargetKey

`func (o *RoutesTransformOperationArguments) GetTargetKey() string`

GetTargetKey returns the TargetKey field if non-nil, zero value otherwise.

### GetTargetKeyOk

`func (o *RoutesTransformOperationArguments) GetTargetKeyOk() (*string, bool)`

GetTargetKeyOk returns a tuple with the TargetKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetKey

`func (o *RoutesTransformOperationArguments) SetTargetKey(v string)`

SetTargetKey sets TargetKey field to given value.

### HasTargetKey

`func (o *RoutesTransformOperationArguments) HasTargetKey() bool`

HasTargetKey returns a boolean if a field has been set.

### GetTargetTimezone

`func (o *RoutesTransformOperationArguments) GetTargetTimezone() string`

GetTargetTimezone returns the TargetTimezone field if non-nil, zero value otherwise.

### GetTargetTimezoneOk

`func (o *RoutesTransformOperationArguments) GetTargetTimezoneOk() (*string, bool)`

GetTargetTimezoneOk returns a tuple with the TargetTimezone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetTimezone

`func (o *RoutesTransformOperationArguments) SetTargetTimezone(v string)`

SetTargetTimezone sets TargetTimezone field to given value.

### HasTargetTimezone

`func (o *RoutesTransformOperationArguments) HasTargetTimezone() bool`

HasTargetTimezone returns a boolean if a field has been set.

### GetKeyToWatch

`func (o *RoutesTransformOperationArguments) GetKeyToWatch() string`

GetKeyToWatch returns the KeyToWatch field if non-nil, zero value otherwise.

### GetKeyToWatchOk

`func (o *RoutesTransformOperationArguments) GetKeyToWatchOk() (*string, bool)`

GetKeyToWatchOk returns a tuple with the KeyToWatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyToWatch

`func (o *RoutesTransformOperationArguments) SetKeyToWatch(v string)`

SetKeyToWatch sets KeyToWatch field to given value.

### HasKeyToWatch

`func (o *RoutesTransformOperationArguments) HasKeyToWatch() bool`

HasKeyToWatch returns a boolean if a field has been set.

### GetValueToWatch

`func (o *RoutesTransformOperationArguments) GetValueToWatch() interface{}`

GetValueToWatch returns the ValueToWatch field if non-nil, zero value otherwise.

### GetValueToWatchOk

`func (o *RoutesTransformOperationArguments) GetValueToWatchOk() (*interface{}, bool)`

GetValueToWatchOk returns a tuple with the ValueToWatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueToWatch

`func (o *RoutesTransformOperationArguments) SetValueToWatch(v interface{})`

SetValueToWatch sets ValueToWatch field to given value.

### HasValueToWatch

`func (o *RoutesTransformOperationArguments) HasValueToWatch() bool`

HasValueToWatch returns a boolean if a field has been set.

### SetValueToWatchNil

`func (o *RoutesTransformOperationArguments) SetValueToWatchNil(b bool)`

 SetValueToWatchNil sets the value for ValueToWatch to be an explicit nil

### UnsetValueToWatch
`func (o *RoutesTransformOperationArguments) UnsetValueToWatch()`

UnsetValueToWatch ensures that no value is present for ValueToWatch, not even an explicit nil
### GetNewKey

`func (o *RoutesTransformOperationArguments) GetNewKey() string`

GetNewKey returns the NewKey field if non-nil, zero value otherwise.

### GetNewKeyOk

`func (o *RoutesTransformOperationArguments) GetNewKeyOk() (*string, bool)`

GetNewKeyOk returns a tuple with the NewKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewKey

`func (o *RoutesTransformOperationArguments) SetNewKey(v string)`

SetNewKey sets NewKey field to given value.

### HasNewKey

`func (o *RoutesTransformOperationArguments) HasNewKey() bool`

HasNewKey returns a boolean if a field has been set.

### GetDelimiter

`func (o *RoutesTransformOperationArguments) GetDelimiter() string`

GetDelimiter returns the Delimiter field if non-nil, zero value otherwise.

### GetDelimiterOk

`func (o *RoutesTransformOperationArguments) GetDelimiterOk() (*string, bool)`

GetDelimiterOk returns a tuple with the Delimiter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelimiter

`func (o *RoutesTransformOperationArguments) SetDelimiter(v string)`

SetDelimiter sets Delimiter field to given value.

### HasDelimiter

`func (o *RoutesTransformOperationArguments) HasDelimiter() bool`

HasDelimiter returns a boolean if a field has been set.

### GetQuery

`func (o *RoutesTransformOperationArguments) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *RoutesTransformOperationArguments) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *RoutesTransformOperationArguments) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *RoutesTransformOperationArguments) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetValueToSet

`func (o *RoutesTransformOperationArguments) GetValueToSet() interface{}`

GetValueToSet returns the ValueToSet field if non-nil, zero value otherwise.

### GetValueToSetOk

`func (o *RoutesTransformOperationArguments) GetValueToSetOk() (*interface{}, bool)`

GetValueToSetOk returns a tuple with the ValueToSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueToSet

`func (o *RoutesTransformOperationArguments) SetValueToSet(v interface{})`

SetValueToSet sets ValueToSet field to given value.

### HasValueToSet

`func (o *RoutesTransformOperationArguments) HasValueToSet() bool`

HasValueToSet returns a boolean if a field has been set.

### SetValueToSetNil

`func (o *RoutesTransformOperationArguments) SetValueToSetNil(b bool)`

 SetValueToSetNil sets the value for ValueToSet to be an explicit nil

### UnsetValueToSet
`func (o *RoutesTransformOperationArguments) UnsetValueToSet()`

UnsetValueToSet ensures that no value is present for ValueToSet, not even an explicit nil
### GetFormat

`func (o *RoutesTransformOperationArguments) GetFormat() string`

GetFormat returns the Format field if non-nil, zero value otherwise.

### GetFormatOk

`func (o *RoutesTransformOperationArguments) GetFormatOk() (*string, bool)`

GetFormatOk returns a tuple with the Format field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormat

`func (o *RoutesTransformOperationArguments) SetFormat(v string)`

SetFormat sets Format field to given value.

### HasFormat

`func (o *RoutesTransformOperationArguments) HasFormat() bool`

HasFormat returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


