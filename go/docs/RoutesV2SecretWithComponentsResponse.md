# RoutesV2SecretWithComponentsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Enrichments** | Pointer to [**[]ModelsComponentReference**](ModelsComponentReference.md) |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Inputs** | Pointer to [**[]ModelsComponentReference**](ModelsComponentReference.md) |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**Outputs** | Pointer to [**[]ModelsComponentReference**](ModelsComponentReference.md) |  | [optional] 
**ShareDetails** | Pointer to [**ModelsShareDetails**](ModelsShareDetails.md) |  | [optional] 
**Transforms** | Pointer to [**[]ModelsComponentReference**](ModelsComponentReference.md) |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutesV2SecretWithComponentsResponse

`func NewRoutesV2SecretWithComponentsResponse() *RoutesV2SecretWithComponentsResponse`

NewRoutesV2SecretWithComponentsResponse instantiates a new RoutesV2SecretWithComponentsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2SecretWithComponentsResponseWithDefaults

`func NewRoutesV2SecretWithComponentsResponseWithDefaults() *RoutesV2SecretWithComponentsResponse`

NewRoutesV2SecretWithComponentsResponseWithDefaults instantiates a new RoutesV2SecretWithComponentsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *RoutesV2SecretWithComponentsResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RoutesV2SecretWithComponentsResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RoutesV2SecretWithComponentsResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *RoutesV2SecretWithComponentsResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV2SecretWithComponentsResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2SecretWithComponentsResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2SecretWithComponentsResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2SecretWithComponentsResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEnrichments

`func (o *RoutesV2SecretWithComponentsResponse) GetEnrichments() []ModelsComponentReference`

GetEnrichments returns the Enrichments field if non-nil, zero value otherwise.

### GetEnrichmentsOk

`func (o *RoutesV2SecretWithComponentsResponse) GetEnrichmentsOk() (*[]ModelsComponentReference, bool)`

GetEnrichmentsOk returns a tuple with the Enrichments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrichments

`func (o *RoutesV2SecretWithComponentsResponse) SetEnrichments(v []ModelsComponentReference)`

SetEnrichments sets Enrichments field to given value.

### HasEnrichments

`func (o *RoutesV2SecretWithComponentsResponse) HasEnrichments() bool`

HasEnrichments returns a boolean if a field has been set.

### GetId

`func (o *RoutesV2SecretWithComponentsResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoutesV2SecretWithComponentsResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoutesV2SecretWithComponentsResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoutesV2SecretWithComponentsResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInputs

`func (o *RoutesV2SecretWithComponentsResponse) GetInputs() []ModelsComponentReference`

GetInputs returns the Inputs field if non-nil, zero value otherwise.

### GetInputsOk

`func (o *RoutesV2SecretWithComponentsResponse) GetInputsOk() (*[]ModelsComponentReference, bool)`

GetInputsOk returns a tuple with the Inputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputs

`func (o *RoutesV2SecretWithComponentsResponse) SetInputs(v []ModelsComponentReference)`

SetInputs sets Inputs field to given value.

### HasInputs

`func (o *RoutesV2SecretWithComponentsResponse) HasInputs() bool`

HasInputs returns a boolean if a field has been set.

### GetName

`func (o *RoutesV2SecretWithComponentsResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2SecretWithComponentsResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2SecretWithComponentsResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV2SecretWithComponentsResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *RoutesV2SecretWithComponentsResponse) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesV2SecretWithComponentsResponse) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesV2SecretWithComponentsResponse) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *RoutesV2SecretWithComponentsResponse) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetOutputs

`func (o *RoutesV2SecretWithComponentsResponse) GetOutputs() []ModelsComponentReference`

GetOutputs returns the Outputs field if non-nil, zero value otherwise.

### GetOutputsOk

`func (o *RoutesV2SecretWithComponentsResponse) GetOutputsOk() (*[]ModelsComponentReference, bool)`

GetOutputsOk returns a tuple with the Outputs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutputs

`func (o *RoutesV2SecretWithComponentsResponse) SetOutputs(v []ModelsComponentReference)`

SetOutputs sets Outputs field to given value.

### HasOutputs

`func (o *RoutesV2SecretWithComponentsResponse) HasOutputs() bool`

HasOutputs returns a boolean if a field has been set.

### GetShareDetails

`func (o *RoutesV2SecretWithComponentsResponse) GetShareDetails() ModelsShareDetails`

GetShareDetails returns the ShareDetails field if non-nil, zero value otherwise.

### GetShareDetailsOk

`func (o *RoutesV2SecretWithComponentsResponse) GetShareDetailsOk() (*ModelsShareDetails, bool)`

GetShareDetailsOk returns a tuple with the ShareDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareDetails

`func (o *RoutesV2SecretWithComponentsResponse) SetShareDetails(v ModelsShareDetails)`

SetShareDetails sets ShareDetails field to given value.

### HasShareDetails

`func (o *RoutesV2SecretWithComponentsResponse) HasShareDetails() bool`

HasShareDetails returns a boolean if a field has been set.

### GetTransforms

`func (o *RoutesV2SecretWithComponentsResponse) GetTransforms() []ModelsComponentReference`

GetTransforms returns the Transforms field if non-nil, zero value otherwise.

### GetTransformsOk

`func (o *RoutesV2SecretWithComponentsResponse) GetTransformsOk() (*[]ModelsComponentReference, bool)`

GetTransformsOk returns a tuple with the Transforms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransforms

`func (o *RoutesV2SecretWithComponentsResponse) SetTransforms(v []ModelsComponentReference)`

SetTransforms sets Transforms field to given value.

### HasTransforms

`func (o *RoutesV2SecretWithComponentsResponse) HasTransforms() bool`

HasTransforms returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *RoutesV2SecretWithComponentsResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *RoutesV2SecretWithComponentsResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *RoutesV2SecretWithComponentsResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *RoutesV2SecretWithComponentsResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


