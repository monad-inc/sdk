# ModelsNodeComponent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BaseConfig** | Pointer to **map[string]interface{}** | BaseConfig is the template&#39;s config before the override delta is applied. | [optional] 
**Config** | Pointer to **map[string]interface{}** | Config is the node&#39;s effective config: for a template-backed node it is the base merged with the node&#39;s override delta (RFC 0017 §3); otherwise it is the component&#39;s base config unchanged. | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Overrides** | Pointer to **map[string]interface{}** | Overrides is the node&#39;s sparse override delta (secrets as {id} refs only). | [optional] 
**References** | Pointer to [**ModelsReferences**](ModelsReferences.md) |  | [optional] 
**ShareDetails** | Pointer to [**ModelsShareDetails**](ModelsShareDetails.md) |  | [optional] 
**TemplateSettings** | Pointer to [**ModelsTemplateSettings**](ModelsTemplateSettings.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 

## Methods

### NewModelsNodeComponent

`func NewModelsNodeComponent() *ModelsNodeComponent`

NewModelsNodeComponent instantiates a new ModelsNodeComponent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsNodeComponentWithDefaults

`func NewModelsNodeComponentWithDefaults() *ModelsNodeComponent`

NewModelsNodeComponentWithDefaults instantiates a new ModelsNodeComponent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBaseConfig

`func (o *ModelsNodeComponent) GetBaseConfig() map[string]*interface{}`

GetBaseConfig returns the BaseConfig field if non-nil, zero value otherwise.

### GetBaseConfigOk

`func (o *ModelsNodeComponent) GetBaseConfigOk() (*map[string]*interface{}, bool)`

GetBaseConfigOk returns a tuple with the BaseConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseConfig

`func (o *ModelsNodeComponent) SetBaseConfig(v map[string]*interface{})`

SetBaseConfig sets BaseConfig field to given value.

### HasBaseConfig

`func (o *ModelsNodeComponent) HasBaseConfig() bool`

HasBaseConfig returns a boolean if a field has been set.

### GetConfig

`func (o *ModelsNodeComponent) GetConfig() map[string]*interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *ModelsNodeComponent) GetConfigOk() (*map[string]*interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *ModelsNodeComponent) SetConfig(v map[string]*interface{})`

SetConfig sets Config field to given value.

### HasConfig

`func (o *ModelsNodeComponent) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsNodeComponent) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsNodeComponent) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsNodeComponent) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsNodeComponent) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *ModelsNodeComponent) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsNodeComponent) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsNodeComponent) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsNodeComponent) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ModelsNodeComponent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsNodeComponent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsNodeComponent) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsNodeComponent) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOverrides

`func (o *ModelsNodeComponent) GetOverrides() map[string]*interface{}`

GetOverrides returns the Overrides field if non-nil, zero value otherwise.

### GetOverridesOk

`func (o *ModelsNodeComponent) GetOverridesOk() (*map[string]*interface{}, bool)`

GetOverridesOk returns a tuple with the Overrides field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrides

`func (o *ModelsNodeComponent) SetOverrides(v map[string]*interface{})`

SetOverrides sets Overrides field to given value.

### HasOverrides

`func (o *ModelsNodeComponent) HasOverrides() bool`

HasOverrides returns a boolean if a field has been set.

### GetReferences

`func (o *ModelsNodeComponent) GetReferences() ModelsReferences`

GetReferences returns the References field if non-nil, zero value otherwise.

### GetReferencesOk

`func (o *ModelsNodeComponent) GetReferencesOk() (*ModelsReferences, bool)`

GetReferencesOk returns a tuple with the References field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferences

`func (o *ModelsNodeComponent) SetReferences(v ModelsReferences)`

SetReferences sets References field to given value.

### HasReferences

`func (o *ModelsNodeComponent) HasReferences() bool`

HasReferences returns a boolean if a field has been set.

### GetShareDetails

`func (o *ModelsNodeComponent) GetShareDetails() ModelsShareDetails`

GetShareDetails returns the ShareDetails field if non-nil, zero value otherwise.

### GetShareDetailsOk

`func (o *ModelsNodeComponent) GetShareDetailsOk() (*ModelsShareDetails, bool)`

GetShareDetailsOk returns a tuple with the ShareDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareDetails

`func (o *ModelsNodeComponent) SetShareDetails(v ModelsShareDetails)`

SetShareDetails sets ShareDetails field to given value.

### HasShareDetails

`func (o *ModelsNodeComponent) HasShareDetails() bool`

HasShareDetails returns a boolean if a field has been set.

### GetTemplateSettings

`func (o *ModelsNodeComponent) GetTemplateSettings() ModelsTemplateSettings`

GetTemplateSettings returns the TemplateSettings field if non-nil, zero value otherwise.

### GetTemplateSettingsOk

`func (o *ModelsNodeComponent) GetTemplateSettingsOk() (*ModelsTemplateSettings, bool)`

GetTemplateSettingsOk returns a tuple with the TemplateSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateSettings

`func (o *ModelsNodeComponent) SetTemplateSettings(v ModelsTemplateSettings)`

SetTemplateSettings sets TemplateSettings field to given value.

### HasTemplateSettings

`func (o *ModelsNodeComponent) HasTemplateSettings() bool`

HasTemplateSettings returns a boolean if a field has been set.

### GetType

`func (o *ModelsNodeComponent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ModelsNodeComponent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ModelsNodeComponent) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ModelsNodeComponent) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVersion

`func (o *ModelsNodeComponent) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ModelsNodeComponent) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ModelsNodeComponent) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ModelsNodeComponent) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


