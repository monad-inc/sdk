# GitlabIssuesSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Confidential** | Pointer to **bool** | Confidential to filter issues by confidentiality status. Confidential &#x3D; true means only show confidential issues. | [optional] 
**GitlabUrl** | Pointer to **string** | GitLab URL (for Custom-Urls when self hosting. Defaults to https://gitlab.com.) | [optional] 
**IssueType** | Pointer to **string** | IssueType to filter issues by type e.g. issue, incident, etc. | [optional] 
**ProjectId** | Pointer to **string** | Project ID to get issues for | [optional] 
**State** | Pointer to **string** | State to filter issues by e.g. opened, closed | [optional] 
**WithLabelDetails** | Pointer to **bool** | Include label details in the response | [optional] 

## Methods

### NewGitlabIssuesSettingsConfig

`func NewGitlabIssuesSettingsConfig() *GitlabIssuesSettingsConfig`

NewGitlabIssuesSettingsConfig instantiates a new GitlabIssuesSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGitlabIssuesSettingsConfigWithDefaults

`func NewGitlabIssuesSettingsConfigWithDefaults() *GitlabIssuesSettingsConfig`

NewGitlabIssuesSettingsConfigWithDefaults instantiates a new GitlabIssuesSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfidential

`func (o *GitlabIssuesSettingsConfig) GetConfidential() bool`

GetConfidential returns the Confidential field if non-nil, zero value otherwise.

### GetConfidentialOk

`func (o *GitlabIssuesSettingsConfig) GetConfidentialOk() (*bool, bool)`

GetConfidentialOk returns a tuple with the Confidential field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfidential

`func (o *GitlabIssuesSettingsConfig) SetConfidential(v bool)`

SetConfidential sets Confidential field to given value.

### HasConfidential

`func (o *GitlabIssuesSettingsConfig) HasConfidential() bool`

HasConfidential returns a boolean if a field has been set.

### GetGitlabUrl

`func (o *GitlabIssuesSettingsConfig) GetGitlabUrl() string`

GetGitlabUrl returns the GitlabUrl field if non-nil, zero value otherwise.

### GetGitlabUrlOk

`func (o *GitlabIssuesSettingsConfig) GetGitlabUrlOk() (*string, bool)`

GetGitlabUrlOk returns a tuple with the GitlabUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGitlabUrl

`func (o *GitlabIssuesSettingsConfig) SetGitlabUrl(v string)`

SetGitlabUrl sets GitlabUrl field to given value.

### HasGitlabUrl

`func (o *GitlabIssuesSettingsConfig) HasGitlabUrl() bool`

HasGitlabUrl returns a boolean if a field has been set.

### GetIssueType

`func (o *GitlabIssuesSettingsConfig) GetIssueType() string`

GetIssueType returns the IssueType field if non-nil, zero value otherwise.

### GetIssueTypeOk

`func (o *GitlabIssuesSettingsConfig) GetIssueTypeOk() (*string, bool)`

GetIssueTypeOk returns a tuple with the IssueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueType

`func (o *GitlabIssuesSettingsConfig) SetIssueType(v string)`

SetIssueType sets IssueType field to given value.

### HasIssueType

`func (o *GitlabIssuesSettingsConfig) HasIssueType() bool`

HasIssueType returns a boolean if a field has been set.

### GetProjectId

`func (o *GitlabIssuesSettingsConfig) GetProjectId() string`

GetProjectId returns the ProjectId field if non-nil, zero value otherwise.

### GetProjectIdOk

`func (o *GitlabIssuesSettingsConfig) GetProjectIdOk() (*string, bool)`

GetProjectIdOk returns a tuple with the ProjectId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectId

`func (o *GitlabIssuesSettingsConfig) SetProjectId(v string)`

SetProjectId sets ProjectId field to given value.

### HasProjectId

`func (o *GitlabIssuesSettingsConfig) HasProjectId() bool`

HasProjectId returns a boolean if a field has been set.

### GetState

`func (o *GitlabIssuesSettingsConfig) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *GitlabIssuesSettingsConfig) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *GitlabIssuesSettingsConfig) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *GitlabIssuesSettingsConfig) HasState() bool`

HasState returns a boolean if a field has been set.

### GetWithLabelDetails

`func (o *GitlabIssuesSettingsConfig) GetWithLabelDetails() bool`

GetWithLabelDetails returns the WithLabelDetails field if non-nil, zero value otherwise.

### GetWithLabelDetailsOk

`func (o *GitlabIssuesSettingsConfig) GetWithLabelDetailsOk() (*bool, bool)`

GetWithLabelDetailsOk returns a tuple with the WithLabelDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithLabelDetails

`func (o *GitlabIssuesSettingsConfig) SetWithLabelDetails(v bool)`

SetWithLabelDetails sets WithLabelDetails field to given value.

### HasWithLabelDetails

`func (o *GitlabIssuesSettingsConfig) HasWithLabelDetails() bool`

HasWithLabelDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


