# CreateAlertRuleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** | Active indicates whether the alert rule is active | [optional] 
**Description** | Pointer to **string** | Description of the alert rule | [optional] 
**Name** | Pointer to **string** | Name of the alert rule | [optional] 
**PipelineIds** | Pointer to **[]string** | Pipeline IDs that this alert rule applies to | [optional] 
**RuleConfig** | Pointer to **map[string]interface{}** | RuleConfig contains the configuration for the alert rule | [optional] 
**Severity** | Pointer to **string** | Severity level of the alert (e.g., \&quot;critical\&quot;, \&quot;warning\&quot;, \&quot;info\&quot;) | [optional] 
**Type** | Pointer to **string** | Type of the alert rule | [optional] 

## Methods

### NewCreateAlertRuleRequest

`func NewCreateAlertRuleRequest() *CreateAlertRuleRequest`

NewCreateAlertRuleRequest instantiates a new CreateAlertRuleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateAlertRuleRequestWithDefaults

`func NewCreateAlertRuleRequestWithDefaults() *CreateAlertRuleRequest`

NewCreateAlertRuleRequestWithDefaults instantiates a new CreateAlertRuleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *CreateAlertRuleRequest) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CreateAlertRuleRequest) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CreateAlertRuleRequest) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *CreateAlertRuleRequest) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetDescription

`func (o *CreateAlertRuleRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateAlertRuleRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateAlertRuleRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateAlertRuleRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetName

`func (o *CreateAlertRuleRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreateAlertRuleRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreateAlertRuleRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CreateAlertRuleRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPipelineIds

`func (o *CreateAlertRuleRequest) GetPipelineIds() []string`

GetPipelineIds returns the PipelineIds field if non-nil, zero value otherwise.

### GetPipelineIdsOk

`func (o *CreateAlertRuleRequest) GetPipelineIdsOk() (*[]string, bool)`

GetPipelineIdsOk returns a tuple with the PipelineIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineIds

`func (o *CreateAlertRuleRequest) SetPipelineIds(v []string)`

SetPipelineIds sets PipelineIds field to given value.

### HasPipelineIds

`func (o *CreateAlertRuleRequest) HasPipelineIds() bool`

HasPipelineIds returns a boolean if a field has been set.

### GetRuleConfig

`func (o *CreateAlertRuleRequest) GetRuleConfig() map[string]interface{}`

GetRuleConfig returns the RuleConfig field if non-nil, zero value otherwise.

### GetRuleConfigOk

`func (o *CreateAlertRuleRequest) GetRuleConfigOk() (*map[string]interface{}, bool)`

GetRuleConfigOk returns a tuple with the RuleConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleConfig

`func (o *CreateAlertRuleRequest) SetRuleConfig(v map[string]interface{})`

SetRuleConfig sets RuleConfig field to given value.

### HasRuleConfig

`func (o *CreateAlertRuleRequest) HasRuleConfig() bool`

HasRuleConfig returns a boolean if a field has been set.

### GetSeverity

`func (o *CreateAlertRuleRequest) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *CreateAlertRuleRequest) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *CreateAlertRuleRequest) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *CreateAlertRuleRequest) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetType

`func (o *CreateAlertRuleRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CreateAlertRuleRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CreateAlertRuleRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CreateAlertRuleRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


