# ModelsTransformConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | Pointer to [**ModelsTransformConditions**](ModelsTransformConditions.md) |  | [optional] 
**Operations** | Pointer to [**[]ModelsTransformOperation**](ModelsTransformOperation.md) |  | [optional] 

## Methods

### NewModelsTransformConfig

`func NewModelsTransformConfig() *ModelsTransformConfig`

NewModelsTransformConfig instantiates a new ModelsTransformConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsTransformConfigWithDefaults

`func NewModelsTransformConfigWithDefaults() *ModelsTransformConfig`

NewModelsTransformConfigWithDefaults instantiates a new ModelsTransformConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditions

`func (o *ModelsTransformConfig) GetConditions() ModelsTransformConditions`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *ModelsTransformConfig) GetConditionsOk() (*ModelsTransformConditions, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *ModelsTransformConfig) SetConditions(v ModelsTransformConditions)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *ModelsTransformConfig) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetOperations

`func (o *ModelsTransformConfig) GetOperations() []ModelsTransformOperation`

GetOperations returns the Operations field if non-nil, zero value otherwise.

### GetOperationsOk

`func (o *ModelsTransformConfig) GetOperationsOk() (*[]ModelsTransformOperation, bool)`

GetOperationsOk returns a tuple with the Operations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperations

`func (o *ModelsTransformConfig) SetOperations(v []ModelsTransformOperation)`

SetOperations sets Operations field to given value.

### HasOperations

`func (o *ModelsTransformConfig) HasOperations() bool`

HasOperations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


