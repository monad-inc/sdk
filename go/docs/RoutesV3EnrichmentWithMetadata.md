# RoutesV3EnrichmentWithMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**ModelsEnrichmentConfig**](ModelsEnrichmentConfig.md) |  | [optional] 
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

### NewRoutesV3EnrichmentWithMetadata

`func NewRoutesV3EnrichmentWithMetadata() *RoutesV3EnrichmentWithMetadata`

NewRoutesV3EnrichmentWithMetadata instantiates a new RoutesV3EnrichmentWithMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3EnrichmentWithMetadataWithDefaults

`func NewRoutesV3EnrichmentWithMetadataWithDefaults() *RoutesV3EnrichmentWithMetadata`

NewRoutesV3EnrichmentWithMetadataWithDefaults instantiates a new RoutesV3EnrichmentWithMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV3EnrichmentWithMetadata) GetConfig() ModelsEnrichmentConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV3EnrichmentWithMetadata) GetConfigOk() (*ModelsEnrichmentConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV3EnrichmentWithMetadata) SetConfig(v ModelsEnrichmentConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV3EnrichmentWithMetadata) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetCreatedAt

`func (o *RoutesV3EnrichmentWithMetadata) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RoutesV3EnrichmentWithMetadata) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RoutesV3EnrichmentWithMetadata) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *RoutesV3EnrichmentWithMetadata) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3EnrichmentWithMetadata) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3EnrichmentWithMetadata) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3EnrichmentWithMetadata) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3EnrichmentWithMetadata) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *RoutesV3EnrichmentWithMetadata) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoutesV3EnrichmentWithMetadata) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoutesV3EnrichmentWithMetadata) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoutesV3EnrichmentWithMetadata) HasId() bool`

HasId returns a boolean if a field has been set.

### GetManagedBy

`func (o *RoutesV3EnrichmentWithMetadata) GetManagedBy() ModelsManagedBy`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *RoutesV3EnrichmentWithMetadata) GetManagedByOk() (*ModelsManagedBy, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *RoutesV3EnrichmentWithMetadata) SetManagedBy(v ModelsManagedBy)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *RoutesV3EnrichmentWithMetadata) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3EnrichmentWithMetadata) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3EnrichmentWithMetadata) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3EnrichmentWithMetadata) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3EnrichmentWithMetadata) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *RoutesV3EnrichmentWithMetadata) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesV3EnrichmentWithMetadata) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesV3EnrichmentWithMetadata) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *RoutesV3EnrichmentWithMetadata) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetReferences

`func (o *RoutesV3EnrichmentWithMetadata) GetReferences() ModelsReferences`

GetReferences returns the References field if non-nil, zero value otherwise.

### GetReferencesOk

`func (o *RoutesV3EnrichmentWithMetadata) GetReferencesOk() (*ModelsReferences, bool)`

GetReferencesOk returns a tuple with the References field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferences

`func (o *RoutesV3EnrichmentWithMetadata) SetReferences(v ModelsReferences)`

SetReferences sets References field to given value.

### HasReferences

`func (o *RoutesV3EnrichmentWithMetadata) HasReferences() bool`

HasReferences returns a boolean if a field has been set.

### GetResourceMetadata

`func (o *RoutesV3EnrichmentWithMetadata) GetResourceMetadata() ConnectormetaResourceMetadata`

GetResourceMetadata returns the ResourceMetadata field if non-nil, zero value otherwise.

### GetResourceMetadataOk

`func (o *RoutesV3EnrichmentWithMetadata) GetResourceMetadataOk() (*ConnectormetaResourceMetadata, bool)`

GetResourceMetadataOk returns a tuple with the ResourceMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceMetadata

`func (o *RoutesV3EnrichmentWithMetadata) SetResourceMetadata(v ConnectormetaResourceMetadata)`

SetResourceMetadata sets ResourceMetadata field to given value.

### HasResourceMetadata

`func (o *RoutesV3EnrichmentWithMetadata) HasResourceMetadata() bool`

HasResourceMetadata returns a boolean if a field has been set.

### GetShareDetails

`func (o *RoutesV3EnrichmentWithMetadata) GetShareDetails() ModelsShareDetails`

GetShareDetails returns the ShareDetails field if non-nil, zero value otherwise.

### GetShareDetailsOk

`func (o *RoutesV3EnrichmentWithMetadata) GetShareDetailsOk() (*ModelsShareDetails, bool)`

GetShareDetailsOk returns a tuple with the ShareDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareDetails

`func (o *RoutesV3EnrichmentWithMetadata) SetShareDetails(v ModelsShareDetails)`

SetShareDetails sets ShareDetails field to given value.

### HasShareDetails

`func (o *RoutesV3EnrichmentWithMetadata) HasShareDetails() bool`

HasShareDetails returns a boolean if a field has been set.

### GetType

`func (o *RoutesV3EnrichmentWithMetadata) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV3EnrichmentWithMetadata) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV3EnrichmentWithMetadata) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV3EnrichmentWithMetadata) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *RoutesV3EnrichmentWithMetadata) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *RoutesV3EnrichmentWithMetadata) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *RoutesV3EnrichmentWithMetadata) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *RoutesV3EnrichmentWithMetadata) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetVersion

`func (o *RoutesV3EnrichmentWithMetadata) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *RoutesV3EnrichmentWithMetadata) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *RoutesV3EnrichmentWithMetadata) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *RoutesV3EnrichmentWithMetadata) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


