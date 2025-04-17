# RoutesTransformOperationArguments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **string** | The key to store the timestamp in | [optional] 
**Value** | Pointer to **interface{}** |  | [optional] 
**KeyToWatch** | Pointer to **string** | The key to watch for | [optional] 
**ValueToWatch** | Pointer to **interface{}** |  | [optional] 
**NewKey** | Pointer to **string** | The new key to rename to | [optional] 
**Delimiter** | Pointer to **string** | The delimiter to use when flattening for example flattening an array of assets: _ would result in assets_0, assets_1 | [optional] 
**Query** | Pointer to **string** | The JQ query to apply to the record | [optional] 
**Type** | Pointer to **string** | The new type of the key | [optional] 
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


