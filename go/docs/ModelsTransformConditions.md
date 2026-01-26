# ModelsTransformConditions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | Pointer to [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**OnFail** | Pointer to **string** | will default to bypass if left empty on create/update | [optional] 

## Methods

### NewModelsTransformConditions

`func NewModelsTransformConditions() *ModelsTransformConditions`

NewModelsTransformConditions instantiates a new ModelsTransformConditions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsTransformConditionsWithDefaults

`func NewModelsTransformConditionsWithDefaults() *ModelsTransformConditions`

NewModelsTransformConditionsWithDefaults instantiates a new ModelsTransformConditions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditions

`func (o *ModelsTransformConditions) GetConditions() ModelsConditionEvaluatable`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *ModelsTransformConditions) GetConditionsOk() (*ModelsConditionEvaluatable, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *ModelsTransformConditions) SetConditions(v ModelsConditionEvaluatable)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *ModelsTransformConditions) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetOnFail

`func (o *ModelsTransformConditions) GetOnFail() string`

GetOnFail returns the OnFail field if non-nil, zero value otherwise.

### GetOnFailOk

`func (o *ModelsTransformConditions) GetOnFailOk() (*string, bool)`

GetOnFailOk returns a tuple with the OnFail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnFail

`func (o *ModelsTransformConditions) SetOnFail(v string)`

SetOnFail sets OnFail field to given value.

### HasOnFail

`func (o *ModelsTransformConditions) HasOnFail() bool`

HasOnFail returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


