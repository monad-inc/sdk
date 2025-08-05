# RoutesV3CreateConnectionRequestSaml

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityId** | Pointer to **string** | EntityID is the unique identifier for the SAML connection | [optional] 
**MetadataUrl** | Pointer to **string** | MetadataURL is the URL to IDPs SAML metadata | [optional] 

## Methods

### NewRoutesV3CreateConnectionRequestSaml

`func NewRoutesV3CreateConnectionRequestSaml() *RoutesV3CreateConnectionRequestSaml`

NewRoutesV3CreateConnectionRequestSaml instantiates a new RoutesV3CreateConnectionRequestSaml object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3CreateConnectionRequestSamlWithDefaults

`func NewRoutesV3CreateConnectionRequestSamlWithDefaults() *RoutesV3CreateConnectionRequestSaml`

NewRoutesV3CreateConnectionRequestSamlWithDefaults instantiates a new RoutesV3CreateConnectionRequestSaml object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityId

`func (o *RoutesV3CreateConnectionRequestSaml) GetEntityId() string`

GetEntityId returns the EntityId field if non-nil, zero value otherwise.

### GetEntityIdOk

`func (o *RoutesV3CreateConnectionRequestSaml) GetEntityIdOk() (*string, bool)`

GetEntityIdOk returns a tuple with the EntityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityId

`func (o *RoutesV3CreateConnectionRequestSaml) SetEntityId(v string)`

SetEntityId sets EntityId field to given value.

### HasEntityId

`func (o *RoutesV3CreateConnectionRequestSaml) HasEntityId() bool`

HasEntityId returns a boolean if a field has been set.

### GetMetadataUrl

`func (o *RoutesV3CreateConnectionRequestSaml) GetMetadataUrl() string`

GetMetadataUrl returns the MetadataUrl field if non-nil, zero value otherwise.

### GetMetadataUrlOk

`func (o *RoutesV3CreateConnectionRequestSaml) GetMetadataUrlOk() (*string, bool)`

GetMetadataUrlOk returns a tuple with the MetadataUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadataUrl

`func (o *RoutesV3CreateConnectionRequestSaml) SetMetadataUrl(v string)`

SetMetadataUrl sets MetadataUrl field to given value.

### HasMetadataUrl

`func (o *RoutesV3CreateConnectionRequestSaml) HasMetadataUrl() bool`

HasMetadataUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


