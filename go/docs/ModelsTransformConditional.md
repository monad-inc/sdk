# ModelsTransformConditional

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | Pointer to [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**Else** | Pointer to **string** | will default to bypass if left empty on create/update | [optional] 

## Methods

### NewModelsTransformConditional

`func NewModelsTransformConditional() *ModelsTransformConditional`

NewModelsTransformConditional instantiates a new ModelsTransformConditional object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsTransformConditionalWithDefaults

`func NewModelsTransformConditionalWithDefaults() *ModelsTransformConditional`

NewModelsTransformConditionalWithDefaults instantiates a new ModelsTransformConditional object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditions

`func (o *ModelsTransformConditional) GetConditions() ModelsConditionEvaluatable`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *ModelsTransformConditional) GetConditionsOk() (*ModelsConditionEvaluatable, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *ModelsTransformConditional) SetConditions(v ModelsConditionEvaluatable)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *ModelsTransformConditional) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetElse

`func (o *ModelsTransformConditional) GetElse() string`

GetElse returns the Else field if non-nil, zero value otherwise.

### GetElseOk

`func (o *ModelsTransformConditional) GetElseOk() (*string, bool)`

GetElseOk returns a tuple with the Else field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElse

`func (o *ModelsTransformConditional) SetElse(v string)`

SetElse sets Else field to given value.

### HasElse

`func (o *ModelsTransformConditional) HasElse() bool`

HasElse returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


