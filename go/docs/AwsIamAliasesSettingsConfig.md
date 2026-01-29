# AwsIamAliasesSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accounts** | Pointer to [**[]AwsIamAliasesAccount**](AwsIamAliasesAccount.md) | List of AWS accounts to fetch IAM aliases from | [optional] 
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewAwsIamAliasesSettingsConfig

`func NewAwsIamAliasesSettingsConfig() *AwsIamAliasesSettingsConfig`

NewAwsIamAliasesSettingsConfig instantiates a new AwsIamAliasesSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwsIamAliasesSettingsConfigWithDefaults

`func NewAwsIamAliasesSettingsConfigWithDefaults() *AwsIamAliasesSettingsConfig`

NewAwsIamAliasesSettingsConfigWithDefaults instantiates a new AwsIamAliasesSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccounts

`func (o *AwsIamAliasesSettingsConfig) GetAccounts() []AwsIamAliasesAccount`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *AwsIamAliasesSettingsConfig) GetAccountsOk() (*[]AwsIamAliasesAccount, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *AwsIamAliasesSettingsConfig) SetAccounts(v []AwsIamAliasesAccount)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *AwsIamAliasesSettingsConfig) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.

### GetCron

`func (o *AwsIamAliasesSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *AwsIamAliasesSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *AwsIamAliasesSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *AwsIamAliasesSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *AwsIamAliasesSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *AwsIamAliasesSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *AwsIamAliasesSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *AwsIamAliasesSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


