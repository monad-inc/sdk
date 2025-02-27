# ModelsSecretWithComponents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **string** | When the secret was created | [optional] 
**Description** | Pointer to **string** | The user set Description of the secret | [optional] 
**Id** | Pointer to **string** | The ID of the secret | [optional] 
**Inputs** | Pointer to [**[]ModelsComponentReference**](ModelsComponentReference.md) |  | [optional] 
**Name** | Pointer to **string** | The user set Name of the secret | [optional] 
**OrganizationId** | Pointer to **string** | The OrganizationID the secret belongs to | [optional] 
**Outputs** | Pointer to [**[]ModelsComponentReference**](ModelsComponentReference.md) |  | [optional] 
**UpdatedAt** | Pointer to **string** | When the secret was updated | [optional] 
**Value** | Pointer to **string** | The value of the secret. This will never be returned to the client but can be used to set new values when used in a request payload. | [optional] 

## Methods

### NewModelsSecretWithComponents

`func NewModelsSecretWithComponents() *ModelsSecretWithComponents`

NewModelsSecretWithComponents instantiates a new ModelsSecretWithComponents object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsSecretWithComponentsWithDefaults

`func NewModelsSecretWithComponentsWithDefaults() *ModelsSecretWithComponents`

NewModelsSecretWithComponentsWithDefaults instantiates a new ModelsSecretWithComponents object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *ModelsSecretWithComponents) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsSecretWithComponents) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsSecretWithComponents) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsSecretWithComponents) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsSecretWithComponents) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsSecretWithComponents) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsSecretWithComponents) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsSecretWithComponents) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *ModelsSecretWithComponents) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsSecretWithComponents) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsSecretWithComponents) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsSecretWithComponents) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInputs

`func (o *ModelsSecretWithComponents) GetInputs() []ModelsComponentReference`

GetInputs returns the Inputs field if non-nil, zero value otherwise.

### GetInputsOk

`func (o *ModelsSecretWithComponents) GetInputsOk() (*[]ModelsComponentReference, bool)`

GetInputsOk returns a tuple with the Inputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputs

`func (o *ModelsSecretWithComponents) SetInputs(v []ModelsComponentReference)`

SetInputs sets Inputs field to given value.

### HasInputs

`func (o *ModelsSecretWithComponents) HasInputs() bool`

HasInputs returns a boolean if a field has been set.

### GetName

`func (o *ModelsSecretWithComponents) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsSecretWithComponents) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsSecretWithComponents) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsSecretWithComponents) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsSecretWithComponents) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsSecretWithComponents) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsSecretWithComponents) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsSecretWithComponents) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetOutputs

`func (o *ModelsSecretWithComponents) GetOutputs() []ModelsComponentReference`

GetOutputs returns the Outputs field if non-nil, zero value otherwise.

### GetOutputsOk

`func (o *ModelsSecretWithComponents) GetOutputsOk() (*[]ModelsComponentReference, bool)`

GetOutputsOk returns a tuple with the Outputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputs

`func (o *ModelsSecretWithComponents) SetOutputs(v []ModelsComponentReference)`

SetOutputs sets Outputs field to given value.

### HasOutputs

`func (o *ModelsSecretWithComponents) HasOutputs() bool`

HasOutputs returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ModelsSecretWithComponents) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ModelsSecretWithComponents) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ModelsSecretWithComponents) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ModelsSecretWithComponents) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetValue

`func (o *ModelsSecretWithComponents) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ModelsSecretWithComponents) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ModelsSecretWithComponents) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ModelsSecretWithComponents) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


