# coding: utf-8

"""
    Monad API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.pagerduty_secrets_config import PagerdutySecretsConfig

class TestPagerdutySecretsConfig(unittest.TestCase):
    """PagerdutySecretsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PagerdutySecretsConfig:
        """Test PagerdutySecretsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PagerdutySecretsConfig`
        """
        model = PagerdutySecretsConfig()
        if include_optional:
            return PagerdutySecretsConfig(
                auth_token = monad.models.models/secret.models.Secret(
                    created_at = '', 
                    description = '', 
                    id = '', 
                    name = '', 
                    organization_id = '', 
                    updated_at = '', 
                    value = '', ),
                routing_key = monad.models.models/secret.models.Secret(
                    created_at = '', 
                    description = '', 
                    id = '', 
                    name = '', 
                    organization_id = '', 
                    updated_at = '', 
                    value = '', )
            )
        else:
            return PagerdutySecretsConfig(
        )
        """

    def testPagerdutySecretsConfig(self):
        """Test PagerdutySecretsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
