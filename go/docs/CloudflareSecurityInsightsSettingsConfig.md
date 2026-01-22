# CloudflareSecurityInsightsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Your Cloudflare account ID | [optional] 
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**ExcludeIssueType** | Pointer to **[]string** | Filter to exclude specific issue types. Applied after the include filter. | [optional] 
**ExcludeSeverity** | Pointer to **[]string** | Filter to exclude specific severity levels. Applied after the include filter. | [optional] 
**IssueType** | Pointer to **[]string** | Filter to include only specific issue types (compliance_violation, email_security, exposed_infrastructure, insecure_configuration, weak_authentication). If empty, all types are included. | [optional] 
**Severity** | Pointer to **[]string** | Filter to include only specific severity levels (Low, Moderate, High, Critical). If empty, all severities are included. | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewCloudflareSecurityInsightsSettingsConfig

`func NewCloudflareSecurityInsightsSettingsConfig() *CloudflareSecurityInsightsSettingsConfig`

NewCloudflareSecurityInsightsSettingsConfig instantiates a new CloudflareSecurityInsightsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCloudflareSecurityInsightsSettingsConfigWithDefaults

`func NewCloudflareSecurityInsightsSettingsConfigWithDefaults() *CloudflareSecurityInsightsSettingsConfig`

NewCloudflareSecurityInsightsSettingsConfigWithDefaults instantiates a new CloudflareSecurityInsightsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *CloudflareSecurityInsightsSettingsConfig) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *CloudflareSecurityInsightsSettingsConfig) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *CloudflareSecurityInsightsSettingsConfig) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *CloudflareSecurityInsightsSettingsConfig) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetCron

`func (o *CloudflareSecurityInsightsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *CloudflareSecurityInsightsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *CloudflareSecurityInsightsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *CloudflareSecurityInsightsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetExcludeIssueType

`func (o *CloudflareSecurityInsightsSettingsConfig) GetExcludeIssueType() []string`

GetExcludeIssueType returns the ExcludeIssueType field if non-nil, zero value otherwise.

### GetExcludeIssueTypeOk

`func (o *CloudflareSecurityInsightsSettingsConfig) GetExcludeIssueTypeOk() (*[]string, bool)`

GetExcludeIssueTypeOk returns a tuple with the ExcludeIssueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeIssueType

`func (o *CloudflareSecurityInsightsSettingsConfig) SetExcludeIssueType(v []string)`

SetExcludeIssueType sets ExcludeIssueType field to given value.

### HasExcludeIssueType

`func (o *CloudflareSecurityInsightsSettingsConfig) HasExcludeIssueType() bool`

HasExcludeIssueType returns a boolean if a field has been set.

### GetExcludeSeverity

`func (o *CloudflareSecurityInsightsSettingsConfig) GetExcludeSeverity() []string`

GetExcludeSeverity returns the ExcludeSeverity field if non-nil, zero value otherwise.

### GetExcludeSeverityOk

`func (o *CloudflareSecurityInsightsSettingsConfig) GetExcludeSeverityOk() (*[]string, bool)`

GetExcludeSeverityOk returns a tuple with the ExcludeSeverity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeSeverity

`func (o *CloudflareSecurityInsightsSettingsConfig) SetExcludeSeverity(v []string)`

SetExcludeSeverity sets ExcludeSeverity field to given value.

### HasExcludeSeverity

`func (o *CloudflareSecurityInsightsSettingsConfig) HasExcludeSeverity() bool`

HasExcludeSeverity returns a boolean if a field has been set.

### GetIssueType

`func (o *CloudflareSecurityInsightsSettingsConfig) GetIssueType() []string`

GetIssueType returns the IssueType field if non-nil, zero value otherwise.

### GetIssueTypeOk

`func (o *CloudflareSecurityInsightsSettingsConfig) GetIssueTypeOk() (*[]string, bool)`

GetIssueTypeOk returns a tuple with the IssueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueType

`func (o *CloudflareSecurityInsightsSettingsConfig) SetIssueType(v []string)`

SetIssueType sets IssueType field to given value.

### HasIssueType

`func (o *CloudflareSecurityInsightsSettingsConfig) HasIssueType() bool`

HasIssueType returns a boolean if a field has been set.

### GetSeverity

`func (o *CloudflareSecurityInsightsSettingsConfig) GetSeverity() []string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *CloudflareSecurityInsightsSettingsConfig) GetSeverityOk() (*[]string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *CloudflareSecurityInsightsSettingsConfig) SetSeverity(v []string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *CloudflareSecurityInsightsSettingsConfig) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *CloudflareSecurityInsightsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *CloudflareSecurityInsightsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *CloudflareSecurityInsightsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *CloudflareSecurityInsightsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


