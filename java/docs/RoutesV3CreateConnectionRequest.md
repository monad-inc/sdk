

# RoutesV3CreateConnectionRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**description** | **String** | Description of the connection |  [optional] |
|**emailDomains** | **List&lt;String&gt;** | EmailDomains associated with the connection for SP-initiated SSO discovery. Optional; empty/unset falls through to the column default (empty array). |  [optional] |
|**name** | **String** | Name of the connection |  [optional] |
|**publicName** | **String** | PublicName is the customer-controlled label shown to end users in the SSO discovery picker. Optional; empty/unset falls through to the column default (an auto-generated &#x60;sso-&lt;hex&gt;&#x60; value). |  [optional] |
|**saml** | [**RoutesV3CreateConnectionRequestSaml**](RoutesV3CreateConnectionRequestSaml.md) |  |  [optional] |
|**sessionSettings** | [**ModelsConnectionSessionSettings**](ModelsConnectionSessionSettings.md) |  |  [optional] |



