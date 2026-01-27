# InputsConnectorMeta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthType** | Pointer to **string** |  | [optional] 
**BillingType** | Pointer to **int32** |  | [optional] 
**Category** | Pointer to **string** |  | [optional] 
**Config** | Pointer to **interface{}** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**House** | Pointer to **string** |  | [optional] 
**InBeta** | Pointer to **bool** |  | [optional] 
**Internal** | Pointer to **bool** |  | [optional] 
**IsCron** | Pointer to **bool** |  | [optional] 
**IsDefault** | Pointer to **bool** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**ReleaseDate** | Pointer to **string** |  | [optional] 
**Tier** | Pointer to **int32** |  | [optional] 
**TypeId** | Pointer to **string** |  | [optional] 

## Methods

### NewInputsConnectorMeta

`func NewInputsConnectorMeta() *InputsConnectorMeta`

NewInputsConnectorMeta instantiates a new InputsConnectorMeta object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInputsConnectorMetaWithDefaults

`func NewInputsConnectorMetaWithDefaults() *InputsConnectorMeta`

NewInputsConnectorMetaWithDefaults instantiates a new InputsConnectorMeta object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthType

`func (o *InputsConnectorMeta) GetAuthType() string`

GetAuthType returns the AuthType field if non-nil, zero value otherwise.

### GetAuthTypeOk

`func (o *InputsConnectorMeta) GetAuthTypeOk() (*string, bool)`

GetAuthTypeOk returns a tuple with the AuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthType

`func (o *InputsConnectorMeta) SetAuthType(v string)`

SetAuthType sets AuthType field to given value.

### HasAuthType

`func (o *InputsConnectorMeta) HasAuthType() bool`

HasAuthType returns a boolean if a field has been set.

### GetBillingType

`func (o *InputsConnectorMeta) GetBillingType() int32`

GetBillingType returns the BillingType field if non-nil, zero value otherwise.

### GetBillingTypeOk

`func (o *InputsConnectorMeta) GetBillingTypeOk() (*int32, bool)`

GetBillingTypeOk returns a tuple with the BillingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingType

`func (o *InputsConnectorMeta) SetBillingType(v int32)`

SetBillingType sets BillingType field to given value.

### HasBillingType

`func (o *InputsConnectorMeta) HasBillingType() bool`

HasBillingType returns a boolean if a field has been set.

### GetCategory

`func (o *InputsConnectorMeta) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *InputsConnectorMeta) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *InputsConnectorMeta) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *InputsConnectorMeta) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetConfig

`func (o *InputsConnectorMeta) GetConfig() interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *InputsConnectorMeta) GetConfigOk() (*interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *InputsConnectorMeta) SetConfig(v interface{})`

SetConfig sets Config field to given value.

### HasConfig

`func (o *InputsConnectorMeta) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### SetConfigNil

`func (o *InputsConnectorMeta) SetConfigNil(b bool)`

 SetConfigNil sets the value for Config to be an explicit nil

### UnsetConfig
`func (o *InputsConnectorMeta) UnsetConfig()`

UnsetConfig ensures that no value is present for Config, not even an explicit nil
### GetDescription

`func (o *InputsConnectorMeta) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *InputsConnectorMeta) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *InputsConnectorMeta) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *InputsConnectorMeta) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHouse

`func (o *InputsConnectorMeta) GetHouse() string`

GetHouse returns the House field if non-nil, zero value otherwise.

### GetHouseOk

`func (o *InputsConnectorMeta) GetHouseOk() (*string, bool)`

GetHouseOk returns a tuple with the House field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouse

`func (o *InputsConnectorMeta) SetHouse(v string)`

SetHouse sets House field to given value.

### HasHouse

`func (o *InputsConnectorMeta) HasHouse() bool`

HasHouse returns a boolean if a field has been set.

### GetInBeta

`func (o *InputsConnectorMeta) GetInBeta() bool`

GetInBeta returns the InBeta field if non-nil, zero value otherwise.

### GetInBetaOk

`func (o *InputsConnectorMeta) GetInBetaOk() (*bool, bool)`

GetInBetaOk returns a tuple with the InBeta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInBeta

`func (o *InputsConnectorMeta) SetInBeta(v bool)`

SetInBeta sets InBeta field to given value.

### HasInBeta

`func (o *InputsConnectorMeta) HasInBeta() bool`

HasInBeta returns a boolean if a field has been set.

### GetInternal

`func (o *InputsConnectorMeta) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *InputsConnectorMeta) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *InputsConnectorMeta) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *InputsConnectorMeta) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetIsCron

`func (o *InputsConnectorMeta) GetIsCron() bool`

GetIsCron returns the IsCron field if non-nil, zero value otherwise.

### GetIsCronOk

`func (o *InputsConnectorMeta) GetIsCronOk() (*bool, bool)`

GetIsCronOk returns a tuple with the IsCron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCron

`func (o *InputsConnectorMeta) SetIsCron(v bool)`

SetIsCron sets IsCron field to given value.

### HasIsCron

`func (o *InputsConnectorMeta) HasIsCron() bool`

HasIsCron returns a boolean if a field has been set.

### GetIsDefault

`func (o *InputsConnectorMeta) GetIsDefault() bool`

GetIsDefault returns the IsDefault field if non-nil, zero value otherwise.

### GetIsDefaultOk

`func (o *InputsConnectorMeta) GetIsDefaultOk() (*bool, bool)`

GetIsDefaultOk returns a tuple with the IsDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDefault

`func (o *InputsConnectorMeta) SetIsDefault(v bool)`

SetIsDefault sets IsDefault field to given value.

### HasIsDefault

`func (o *InputsConnectorMeta) HasIsDefault() bool`

HasIsDefault returns a boolean if a field has been set.

### GetName

`func (o *InputsConnectorMeta) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *InputsConnectorMeta) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *InputsConnectorMeta) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *InputsConnectorMeta) HasName() bool`

HasName returns a boolean if a field has been set.

### GetReleaseDate

`func (o *InputsConnectorMeta) GetReleaseDate() string`

GetReleaseDate returns the ReleaseDate field if non-nil, zero value otherwise.

### GetReleaseDateOk

`func (o *InputsConnectorMeta) GetReleaseDateOk() (*string, bool)`

GetReleaseDateOk returns a tuple with the ReleaseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReleaseDate

`func (o *InputsConnectorMeta) SetReleaseDate(v string)`

SetReleaseDate sets ReleaseDate field to given value.

### HasReleaseDate

`func (o *InputsConnectorMeta) HasReleaseDate() bool`

HasReleaseDate returns a boolean if a field has been set.

### GetTier

`func (o *InputsConnectorMeta) GetTier() int32`

GetTier returns the Tier field if non-nil, zero value otherwise.

### GetTierOk

`func (o *InputsConnectorMeta) GetTierOk() (*int32, bool)`

GetTierOk returns a tuple with the Tier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTier

`func (o *InputsConnectorMeta) SetTier(v int32)`

SetTier sets Tier field to given value.

### HasTier

`func (o *InputsConnectorMeta) HasTier() bool`

HasTier returns a boolean if a field has been set.

### GetTypeId

`func (o *InputsConnectorMeta) GetTypeId() string`

GetTypeId returns the TypeId field if non-nil, zero value otherwise.

### GetTypeIdOk

`func (o *InputsConnectorMeta) GetTypeIdOk() (*string, bool)`

GetTypeIdOk returns a tuple with the TypeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeId

`func (o *InputsConnectorMeta) SetTypeId(v string)`

SetTypeId sets TypeId field to given value.

### HasTypeId

`func (o *InputsConnectorMeta) HasTypeId() bool`

HasTypeId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


