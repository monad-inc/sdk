# ModelsConditionEvaluatable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | Pointer to [**[]ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**Config** | Pointer to **map[string]interface{}** | leaf config | [optional] 
**Operator** | Pointer to **string** | Only set for logical nodes | [optional] 
**TypeId** | Pointer to **string** | Only set for leaf nodes | [optional] 

## Methods

### NewModelsConditionEvaluatable

`func NewModelsConditionEvaluatable() *ModelsConditionEvaluatable`

NewModelsConditionEvaluatable instantiates a new ModelsConditionEvaluatable object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsConditionEvaluatableWithDefaults

`func NewModelsConditionEvaluatableWithDefaults() *ModelsConditionEvaluatable`

NewModelsConditionEvaluatableWithDefaults instantiates a new ModelsConditionEvaluatable object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditions

`func (o *ModelsConditionEvaluatable) GetConditions() []ModelsConditionEvaluatable`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *ModelsConditionEvaluatable) GetConditionsOk() (*[]ModelsConditionEvaluatable, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *ModelsConditionEvaluatable) SetConditions(v []ModelsConditionEvaluatable)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *ModelsConditionEvaluatable) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetConfig

`func (o *ModelsConditionEvaluatable) GetConfig() map[string]interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *ModelsConditionEvaluatable) GetConfigOk() (*map[string]interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *ModelsConditionEvaluatable) SetConfig(v map[string]interface{})`

SetConfig sets Config field to given value.

### HasConfig

`func (o *ModelsConditionEvaluatable) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetOperator

`func (o *ModelsConditionEvaluatable) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *ModelsConditionEvaluatable) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *ModelsConditionEvaluatable) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *ModelsConditionEvaluatable) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetTypeId

`func (o *ModelsConditionEvaluatable) GetTypeId() string`

GetTypeId returns the TypeId field if non-nil, zero value otherwise.

### GetTypeIdOk

`func (o *ModelsConditionEvaluatable) GetTypeIdOk() (*string, bool)`

GetTypeIdOk returns a tuple with the TypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeId

`func (o *ModelsConditionEvaluatable) SetTypeId(v string)`

SetTypeId sets TypeId field to given value.

### HasTypeId

`func (o *ModelsConditionEvaluatable) HasTypeId() bool`

HasTypeId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


