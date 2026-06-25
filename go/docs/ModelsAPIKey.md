# ModelsAPIKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**ExpirationTime** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**JwtSigningKeyId** | Pointer to **string** | JWTSigningKeyID is the jwt_signing_keys row that signed the key&#39;s current token. Re-stamped on rotation. Empty when signed via the legacy HS256 path (no signing-key row), or for keys created before this was recorded. | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**RoleId** | Pointer to **string** |  | [optional] 
**TokenVersion** | Pointer to **int32** | TokenVersion is the current generation of the key. It is embedded in minted JWTs as the &#x60;ver&#x60; claim and bumped on rotation to invalidate previously-issued tokens without changing the key&#39;s id. | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsAPIKey

`func NewModelsAPIKey() *ModelsAPIKey`

NewModelsAPIKey instantiates a new ModelsAPIKey object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsAPIKeyWithDefaults

`func NewModelsAPIKeyWithDefaults() *ModelsAPIKey`

NewModelsAPIKeyWithDefaults instantiates a new ModelsAPIKey object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *ModelsAPIKey) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsAPIKey) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsAPIKey) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsAPIKey) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsAPIKey) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsAPIKey) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsAPIKey) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsAPIKey) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetExpirationTime

`func (o *ModelsAPIKey) GetExpirationTime() string`

GetExpirationTime returns the ExpirationTime field if non-nil, zero value otherwise.

### GetExpirationTimeOk

`func (o *ModelsAPIKey) GetExpirationTimeOk() (*string, bool)`

GetExpirationTimeOk returns a tuple with the ExpirationTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationTime

`func (o *ModelsAPIKey) SetExpirationTime(v string)`

SetExpirationTime sets ExpirationTime field to given value.

### HasExpirationTime

`func (o *ModelsAPIKey) HasExpirationTime() bool`

HasExpirationTime returns a boolean if a field has been set.

### GetId

`func (o *ModelsAPIKey) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsAPIKey) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsAPIKey) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsAPIKey) HasId() bool`

HasId returns a boolean if a field has been set.

### GetJwtSigningKeyId

`func (o *ModelsAPIKey) GetJwtSigningKeyId() string`

GetJwtSigningKeyId returns the JwtSigningKeyId field if non-nil, zero value otherwise.

### GetJwtSigningKeyIdOk

`func (o *ModelsAPIKey) GetJwtSigningKeyIdOk() (*string, bool)`

GetJwtSigningKeyIdOk returns a tuple with the JwtSigningKeyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJwtSigningKeyId

`func (o *ModelsAPIKey) SetJwtSigningKeyId(v string)`

SetJwtSigningKeyId sets JwtSigningKeyId field to given value.

### HasJwtSigningKeyId

`func (o *ModelsAPIKey) HasJwtSigningKeyId() bool`

HasJwtSigningKeyId returns a boolean if a field has been set.

### GetName

`func (o *ModelsAPIKey) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsAPIKey) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsAPIKey) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsAPIKey) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsAPIKey) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsAPIKey) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsAPIKey) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsAPIKey) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetRoleId

`func (o *ModelsAPIKey) GetRoleId() string`

GetRoleId returns the RoleId field if non-nil, zero value otherwise.

### GetRoleIdOk

`func (o *ModelsAPIKey) GetRoleIdOk() (*string, bool)`

GetRoleIdOk returns a tuple with the RoleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleId

`func (o *ModelsAPIKey) SetRoleId(v string)`

SetRoleId sets RoleId field to given value.

### HasRoleId

`func (o *ModelsAPIKey) HasRoleId() bool`

HasRoleId returns a boolean if a field has been set.

### GetTokenVersion

`func (o *ModelsAPIKey) GetTokenVersion() int32`

GetTokenVersion returns the TokenVersion field if non-nil, zero value otherwise.

### GetTokenVersionOk

`func (o *ModelsAPIKey) GetTokenVersionOk() (*int32, bool)`

GetTokenVersionOk returns a tuple with the TokenVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokenVersion

`func (o *ModelsAPIKey) SetTokenVersion(v int32)`

SetTokenVersion sets TokenVersion field to given value.

### HasTokenVersion

`func (o *ModelsAPIKey) HasTokenVersion() bool`

HasTokenVersion returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ModelsAPIKey) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ModelsAPIKey) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ModelsAPIKey) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ModelsAPIKey) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


