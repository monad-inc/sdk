# RoutesTransformOperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Arguments** | Pointer to [**RoutesTransformOperationArguments**](RoutesTransformOperationArguments.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Operation** | Pointer to **string** |  | [optional] 
**Secrets** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewRoutesTransformOperation

`func NewRoutesTransformOperation() *RoutesTransformOperation`

NewRoutesTransformOperation instantiates a new RoutesTransformOperation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesTransformOperationWithDefaults

`func NewRoutesTransformOperationWithDefaults() *RoutesTransformOperation`

NewRoutesTransformOperationWithDefaults instantiates a new RoutesTransformOperation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArguments

`func (o *RoutesTransformOperation) GetArguments() RoutesTransformOperationArguments`

GetArguments returns the Arguments field if non-nil, zero value otherwise.

### GetArgumentsOk

`func (o *RoutesTransformOperation) GetArgumentsOk() (*RoutesTransformOperationArguments, bool)`

GetArgumentsOk returns a tuple with the Arguments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArguments

`func (o *RoutesTransformOperation) SetArguments(v RoutesTransformOperationArguments)`

SetArguments sets Arguments field to given value.

### HasArguments

`func (o *RoutesTransformOperation) HasArguments() bool`

HasArguments returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesTransformOperation) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesTransformOperation) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesTransformOperation) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesTransformOperation) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetOperation

`func (o *RoutesTransformOperation) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *RoutesTransformOperation) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *RoutesTransformOperation) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *RoutesTransformOperation) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetSecrets

`func (o *RoutesTransformOperation) GetSecrets() map[string]interface{}`

GetSecrets returns the Secrets field if non-nil, zero value otherwise.

### GetSecretsOk

`func (o *RoutesTransformOperation) GetSecretsOk() (*map[string]interface{}, bool)`

GetSecretsOk returns a tuple with the Secrets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecrets

`func (o *RoutesTransformOperation) SetSecrets(v map[string]interface{})`

SetSecrets sets Secrets field to given value.

### HasSecrets

`func (o *RoutesTransformOperation) HasSecrets() bool`

HasSecrets returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


