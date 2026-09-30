# DedupArgumentsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Fields** | Pointer to **[]string** | fields to key on, in order; empty &#x3D; whole record | [optional] 
**Window** | Pointer to **string** | dedup window / key TTL: one of 1m..5m | [optional] 

## Methods

### NewDedupArgumentsConfig

`func NewDedupArgumentsConfig() *DedupArgumentsConfig`

NewDedupArgumentsConfig instantiates a new DedupArgumentsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDedupArgumentsConfigWithDefaults

`func NewDedupArgumentsConfigWithDefaults() *DedupArgumentsConfig`

NewDedupArgumentsConfigWithDefaults instantiates a new DedupArgumentsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFields

`func (o *DedupArgumentsConfig) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *DedupArgumentsConfig) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *DedupArgumentsConfig) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *DedupArgumentsConfig) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetWindow

`func (o *DedupArgumentsConfig) GetWindow() string`

GetWindow returns the Window field if non-nil, zero value otherwise.

### GetWindowOk

`func (o *DedupArgumentsConfig) GetWindowOk() (*string, bool)`

GetWindowOk returns a tuple with the Window field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWindow

`func (o *DedupArgumentsConfig) SetWindow(v string)`

SetWindow sets Window field to given value.

### HasWindow

`func (o *DedupArgumentsConfig) HasWindow() bool`

HasWindow returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


