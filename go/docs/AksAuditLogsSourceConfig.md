# AksAuditLogsSourceConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventHubs** | Pointer to [**AksAuditLogsEventHubsSource**](AksAuditLogsEventHubsSource.md) |  | [optional] 
**LogAnalytics** | Pointer to [**AksAuditLogsLogAnalyticsSource**](AksAuditLogsLogAnalyticsSource.md) |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewAksAuditLogsSourceConfig

`func NewAksAuditLogsSourceConfig(type_ string, ) *AksAuditLogsSourceConfig`

NewAksAuditLogsSourceConfig instantiates a new AksAuditLogsSourceConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAksAuditLogsSourceConfigWithDefaults

`func NewAksAuditLogsSourceConfigWithDefaults() *AksAuditLogsSourceConfig`

NewAksAuditLogsSourceConfigWithDefaults instantiates a new AksAuditLogsSourceConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventHubs

`func (o *AksAuditLogsSourceConfig) GetEventHubs() AksAuditLogsEventHubsSource`

GetEventHubs returns the EventHubs field if non-nil, zero value otherwise.

### GetEventHubsOk

`func (o *AksAuditLogsSourceConfig) GetEventHubsOk() (*AksAuditLogsEventHubsSource, bool)`

GetEventHubsOk returns a tuple with the EventHubs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventHubs

`func (o *AksAuditLogsSourceConfig) SetEventHubs(v AksAuditLogsEventHubsSource)`

SetEventHubs sets EventHubs field to given value.

### HasEventHubs

`func (o *AksAuditLogsSourceConfig) HasEventHubs() bool`

HasEventHubs returns a boolean if a field has been set.

### GetLogAnalytics

`func (o *AksAuditLogsSourceConfig) GetLogAnalytics() AksAuditLogsLogAnalyticsSource`

GetLogAnalytics returns the LogAnalytics field if non-nil, zero value otherwise.

### GetLogAnalyticsOk

`func (o *AksAuditLogsSourceConfig) GetLogAnalyticsOk() (*AksAuditLogsLogAnalyticsSource, bool)`

GetLogAnalyticsOk returns a tuple with the LogAnalytics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogAnalytics

`func (o *AksAuditLogsSourceConfig) SetLogAnalytics(v AksAuditLogsLogAnalyticsSource)`

SetLogAnalytics sets LogAnalytics field to given value.

### HasLogAnalytics

`func (o *AksAuditLogsSourceConfig) HasLogAnalytics() bool`

HasLogAnalytics returns a boolean if a field has been set.

### GetType

`func (o *AksAuditLogsSourceConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AksAuditLogsSourceConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AksAuditLogsSourceConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


