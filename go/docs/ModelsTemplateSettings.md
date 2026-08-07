# ModelsTemplateSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverridablePaths** | Pointer to **[]string** | OverridablePaths is the allow-list of config paths a pipeline may override (nested paths at any depth, subtree inheritance); everything else is locked. Empty/absent means fully locked. | [optional] 

## Methods

### NewModelsTemplateSettings

`func NewModelsTemplateSettings() *ModelsTemplateSettings`

NewModelsTemplateSettings instantiates a new ModelsTemplateSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsTemplateSettingsWithDefaults

`func NewModelsTemplateSettingsWithDefaults() *ModelsTemplateSettings`

NewModelsTemplateSettingsWithDefaults instantiates a new ModelsTemplateSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverridablePaths

`func (o *ModelsTemplateSettings) GetOverridablePaths() []string`

GetOverridablePaths returns the OverridablePaths field if non-nil, zero value otherwise.

### GetOverridablePathsOk

`func (o *ModelsTemplateSettings) GetOverridablePathsOk() (*[]string, bool)`

GetOverridablePathsOk returns a tuple with the OverridablePaths field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverridablePaths

`func (o *ModelsTemplateSettings) SetOverridablePaths(v []string)`

SetOverridablePaths sets OverridablePaths field to given value.

### HasOverridablePaths

`func (o *ModelsTemplateSettings) HasOverridablePaths() bool`

HasOverridablePaths returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


