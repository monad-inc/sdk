# RoutesGetOutputResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComponentOf** | Pointer to [**[]ModelsPipeline**](ModelsPipeline.md) |  | [optional] 
**Config** | Pointer to [**ModelsOutputConfig**](ModelsOutputConfig.md) |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutesGetOutputResponse

`func NewRoutesGetOutputResponse() *RoutesGetOutputResponse`

NewRoutesGetOutputResponse instantiates a new RoutesGetOutputResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesGetOutputResponseWithDefaults

`func NewRoutesGetOutputResponseWithDefaults() *RoutesGetOutputResponse`

NewRoutesGetOutputResponseWithDefaults instantiates a new RoutesGetOutputResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComponentOf

`func (o *RoutesGetOutputResponse) GetComponentOf() []ModelsPipeline`

GetComponentOf returns the ComponentOf field if non-nil, zero value otherwise.

### GetComponentOfOk

`func (o *RoutesGetOutputResponse) GetComponentOfOk() (*[]ModelsPipeline, bool)`

GetComponentOfOk returns a tuple with the ComponentOf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentOf

`func (o *RoutesGetOutputResponse) SetComponentOf(v []ModelsPipeline)`

SetComponentOf sets ComponentOf field to given value.

### HasComponentOf

`func (o *RoutesGetOutputResponse) HasComponentOf() bool`

HasComponentOf returns a boolean if a field has been set.

### GetConfig

`func (o *RoutesGetOutputResponse) GetConfig() ModelsOutputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesGetOutputResponse) GetConfigOk() (*ModelsOutputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesGetOutputResponse) SetConfig(v ModelsOutputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesGetOutputResponse) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetCreatedAt

`func (o *RoutesGetOutputResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RoutesGetOutputResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RoutesGetOutputResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *RoutesGetOutputResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesGetOutputResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesGetOutputResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesGetOutputResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesGetOutputResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *RoutesGetOutputResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoutesGetOutputResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoutesGetOutputResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoutesGetOutputResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoutesGetOutputResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesGetOutputResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesGetOutputResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesGetOutputResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *RoutesGetOutputResponse) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesGetOutputResponse) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesGetOutputResponse) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *RoutesGetOutputResponse) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetType

`func (o *RoutesGetOutputResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesGetOutputResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesGetOutputResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesGetOutputResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *RoutesGetOutputResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *RoutesGetOutputResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *RoutesGetOutputResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *RoutesGetOutputResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


