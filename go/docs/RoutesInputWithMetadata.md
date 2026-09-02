# RoutesInputWithMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**ModelsInputConfig**](ModelsInputConfig.md) |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**ManagedBy** | Pointer to [**ModelsManagedBy**](ModelsManagedBy.md) |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**References** | Pointer to [**ModelsReferences**](ModelsReferences.md) |  | [optional] 
**ResourceMetadata** | Pointer to [**ConnectormetaResourceMetadata**](ConnectormetaResourceMetadata.md) |  | [optional] 
**ShareDetails** | Pointer to [**ModelsShareDetails**](ModelsShareDetails.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 

## Methods

### NewRoutesInputWithMetadata

`func NewRoutesInputWithMetadata() *RoutesInputWithMetadata`

NewRoutesInputWithMetadata instantiates a new RoutesInputWithMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesInputWithMetadataWithDefaults

`func NewRoutesInputWithMetadataWithDefaults() *RoutesInputWithMetadata`

NewRoutesInputWithMetadataWithDefaults instantiates a new RoutesInputWithMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesInputWithMetadata) GetConfig() ModelsInputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesInputWithMetadata) GetConfigOk() (*ModelsInputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesInputWithMetadata) SetConfig(v ModelsInputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesInputWithMetadata) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetCreatedAt

`func (o *RoutesInputWithMetadata) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RoutesInputWithMetadata) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RoutesInputWithMetadata) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *RoutesInputWithMetadata) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesInputWithMetadata) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesInputWithMetadata) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesInputWithMetadata) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesInputWithMetadata) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *RoutesInputWithMetadata) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoutesInputWithMetadata) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoutesInputWithMetadata) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoutesInputWithMetadata) HasId() bool`

HasId returns a boolean if a field has been set.

### GetManagedBy

`func (o *RoutesInputWithMetadata) GetManagedBy() ModelsManagedBy`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *RoutesInputWithMetadata) GetManagedByOk() (*ModelsManagedBy, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *RoutesInputWithMetadata) SetManagedBy(v ModelsManagedBy)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *RoutesInputWithMetadata) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.

### GetName

`func (o *RoutesInputWithMetadata) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesInputWithMetadata) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesInputWithMetadata) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesInputWithMetadata) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *RoutesInputWithMetadata) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesInputWithMetadata) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesInputWithMetadata) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *RoutesInputWithMetadata) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetReferences

`func (o *RoutesInputWithMetadata) GetReferences() ModelsReferences`

GetReferences returns the References field if non-nil, zero value otherwise.

### GetReferencesOk

`func (o *RoutesInputWithMetadata) GetReferencesOk() (*ModelsReferences, bool)`

GetReferencesOk returns a tuple with the References field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferences

`func (o *RoutesInputWithMetadata) SetReferences(v ModelsReferences)`

SetReferences sets References field to given value.

### HasReferences

`func (o *RoutesInputWithMetadata) HasReferences() bool`

HasReferences returns a boolean if a field has been set.

### GetResourceMetadata

`func (o *RoutesInputWithMetadata) GetResourceMetadata() ConnectormetaResourceMetadata`

GetResourceMetadata returns the ResourceMetadata field if non-nil, zero value otherwise.

### GetResourceMetadataOk

`func (o *RoutesInputWithMetadata) GetResourceMetadataOk() (*ConnectormetaResourceMetadata, bool)`

GetResourceMetadataOk returns a tuple with the ResourceMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceMetadata

`func (o *RoutesInputWithMetadata) SetResourceMetadata(v ConnectormetaResourceMetadata)`

SetResourceMetadata sets ResourceMetadata field to given value.

### HasResourceMetadata

`func (o *RoutesInputWithMetadata) HasResourceMetadata() bool`

HasResourceMetadata returns a boolean if a field has been set.

### GetShareDetails

`func (o *RoutesInputWithMetadata) GetShareDetails() ModelsShareDetails`

GetShareDetails returns the ShareDetails field if non-nil, zero value otherwise.

### GetShareDetailsOk

`func (o *RoutesInputWithMetadata) GetShareDetailsOk() (*ModelsShareDetails, bool)`

GetShareDetailsOk returns a tuple with the ShareDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareDetails

`func (o *RoutesInputWithMetadata) SetShareDetails(v ModelsShareDetails)`

SetShareDetails sets ShareDetails field to given value.

### HasShareDetails

`func (o *RoutesInputWithMetadata) HasShareDetails() bool`

HasShareDetails returns a boolean if a field has been set.

### GetType

`func (o *RoutesInputWithMetadata) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesInputWithMetadata) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesInputWithMetadata) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesInputWithMetadata) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *RoutesInputWithMetadata) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *RoutesInputWithMetadata) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *RoutesInputWithMetadata) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *RoutesInputWithMetadata) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetVersion

`func (o *RoutesInputWithMetadata) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *RoutesInputWithMetadata) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *RoutesInputWithMetadata) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *RoutesInputWithMetadata) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


