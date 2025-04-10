# DevicesSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**FieldOption** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** | The tailnet organization name. Defaults to \&quot;-\&quot; to reference the default organization. | [optional] 

## Methods

### NewDevicesSettingsConfig

`func NewDevicesSettingsConfig() *DevicesSettingsConfig`

NewDevicesSettingsConfig instantiates a new DevicesSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDevicesSettingsConfigWithDefaults

`func NewDevicesSettingsConfigWithDefaults() *DevicesSettingsConfig`

NewDevicesSettingsConfigWithDefaults instantiates a new DevicesSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCron

`func (o *DevicesSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *DevicesSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *DevicesSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *DevicesSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetFieldOption

`func (o *DevicesSettingsConfig) GetFieldOption() string`

GetFieldOption returns the FieldOption field if non-nil, zero value otherwise.

### GetFieldOptionOk

`func (o *DevicesSettingsConfig) GetFieldOptionOk() (*string, bool)`

GetFieldOptionOk returns a tuple with the FieldOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldOption

`func (o *DevicesSettingsConfig) SetFieldOption(v string)`

SetFieldOption sets FieldOption field to given value.

### HasFieldOption

`func (o *DevicesSettingsConfig) HasFieldOption() bool`

HasFieldOption returns a boolean if a field has been set.

### GetOrganizationId

`func (o *DevicesSettingsConfig) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *DevicesSettingsConfig) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *DevicesSettingsConfig) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *DevicesSettingsConfig) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


