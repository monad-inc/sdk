# SentinelThreatIntelligenceSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | **string** | The application (client) ID registered in Microsoft Entra. | 
**ClientSecret** | [**ModelsSecret**](ModelsSecret.md) |  | 
**SourceSystem** | **string** | Free-form label identifying the source system in Sentinel. Must NOT be \&quot;Microsoft Sentinel\&quot; — that value is restricted by the API. | 
**TenantId** | **string** | The Microsoft Entra tenant (directory) ID. | 
**WorkspaceId** | **string** | The Log Analytics workspace ID (GUID) that will store the STIX objects. | 

## Methods

### NewSentinelThreatIntelligenceSettingsConfig

`func NewSentinelThreatIntelligenceSettingsConfig(clientId string, clientSecret ModelsSecret, sourceSystem string, tenantId string, workspaceId string, ) *SentinelThreatIntelligenceSettingsConfig`

NewSentinelThreatIntelligenceSettingsConfig instantiates a new SentinelThreatIntelligenceSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSentinelThreatIntelligenceSettingsConfigWithDefaults

`func NewSentinelThreatIntelligenceSettingsConfigWithDefaults() *SentinelThreatIntelligenceSettingsConfig`

NewSentinelThreatIntelligenceSettingsConfigWithDefaults instantiates a new SentinelThreatIntelligenceSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *SentinelThreatIntelligenceSettingsConfig) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *SentinelThreatIntelligenceSettingsConfig) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *SentinelThreatIntelligenceSettingsConfig) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetClientSecret

`func (o *SentinelThreatIntelligenceSettingsConfig) GetClientSecret() ModelsSecret`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *SentinelThreatIntelligenceSettingsConfig) GetClientSecretOk() (*ModelsSecret, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *SentinelThreatIntelligenceSettingsConfig) SetClientSecret(v ModelsSecret)`

SetClientSecret sets ClientSecret field to given value.


### GetSourceSystem

`func (o *SentinelThreatIntelligenceSettingsConfig) GetSourceSystem() string`

GetSourceSystem returns the SourceSystem field if non-nil, zero value otherwise.

### GetSourceSystemOk

`func (o *SentinelThreatIntelligenceSettingsConfig) GetSourceSystemOk() (*string, bool)`

GetSourceSystemOk returns a tuple with the SourceSystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceSystem

`func (o *SentinelThreatIntelligenceSettingsConfig) SetSourceSystem(v string)`

SetSourceSystem sets SourceSystem field to given value.


### GetTenantId

`func (o *SentinelThreatIntelligenceSettingsConfig) GetTenantId() string`

GetTenantId returns the TenantId field if non-nil, zero value otherwise.

### GetTenantIdOk

`func (o *SentinelThreatIntelligenceSettingsConfig) GetTenantIdOk() (*string, bool)`

GetTenantIdOk returns a tuple with the TenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenantId

`func (o *SentinelThreatIntelligenceSettingsConfig) SetTenantId(v string)`

SetTenantId sets TenantId field to given value.


### GetWorkspaceId

`func (o *SentinelThreatIntelligenceSettingsConfig) GetWorkspaceId() string`

GetWorkspaceId returns the WorkspaceId field if non-nil, zero value otherwise.

### GetWorkspaceIdOk

`func (o *SentinelThreatIntelligenceSettingsConfig) GetWorkspaceIdOk() (*string, bool)`

GetWorkspaceIdOk returns a tuple with the WorkspaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkspaceId

`func (o *SentinelThreatIntelligenceSettingsConfig) SetWorkspaceId(v string)`

SetWorkspaceId sets WorkspaceId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


