# RoutesV3GetEnrichmentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComponentOf** | Pointer to [**[]ModelsPipeline**](ModelsPipeline.md) |  | [optional] 
**Config** | Pointer to [**ModelsEnrichmentConfig**](ModelsEnrichmentConfig.md) |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutesV3GetEnrichmentResponse

`func NewRoutesV3GetEnrichmentResponse() *RoutesV3GetEnrichmentResponse`

NewRoutesV3GetEnrichmentResponse instantiates a new RoutesV3GetEnrichmentResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3GetEnrichmentResponseWithDefaults

`func NewRoutesV3GetEnrichmentResponseWithDefaults() *RoutesV3GetEnrichmentResponse`

NewRoutesV3GetEnrichmentResponseWithDefaults instantiates a new RoutesV3GetEnrichmentResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComponentOf

`func (o *RoutesV3GetEnrichmentResponse) GetComponentOf() []ModelsPipeline`

GetComponentOf returns the ComponentOf field if non-nil, zero value otherwise.

### GetComponentOfOk

`func (o *RoutesV3GetEnrichmentResponse) GetComponentOfOk() (*[]ModelsPipeline, bool)`

GetComponentOfOk returns a tuple with the ComponentOf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentOf

`func (o *RoutesV3GetEnrichmentResponse) SetComponentOf(v []ModelsPipeline)`

SetComponentOf sets ComponentOf field to given value.

### HasComponentOf

`func (o *RoutesV3GetEnrichmentResponse) HasComponentOf() bool`

HasComponentOf returns a boolean if a field has been set.

### GetConfig

`func (o *RoutesV3GetEnrichmentResponse) GetConfig() ModelsEnrichmentConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV3GetEnrichmentResponse) GetConfigOk() (*ModelsEnrichmentConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV3GetEnrichmentResponse) SetConfig(v ModelsEnrichmentConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV3GetEnrichmentResponse) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetCreatedAt

`func (o *RoutesV3GetEnrichmentResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RoutesV3GetEnrichmentResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RoutesV3GetEnrichmentResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *RoutesV3GetEnrichmentResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3GetEnrichmentResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3GetEnrichmentResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3GetEnrichmentResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3GetEnrichmentResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *RoutesV3GetEnrichmentResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoutesV3GetEnrichmentResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoutesV3GetEnrichmentResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoutesV3GetEnrichmentResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3GetEnrichmentResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3GetEnrichmentResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3GetEnrichmentResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3GetEnrichmentResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *RoutesV3GetEnrichmentResponse) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesV3GetEnrichmentResponse) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesV3GetEnrichmentResponse) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *RoutesV3GetEnrichmentResponse) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetType

`func (o *RoutesV3GetEnrichmentResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV3GetEnrichmentResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV3GetEnrichmentResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV3GetEnrichmentResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *RoutesV3GetEnrichmentResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *RoutesV3GetEnrichmentResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *RoutesV3GetEnrichmentResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *RoutesV3GetEnrichmentResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


