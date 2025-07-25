# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.semgrep_deployments_secrets_config import SemgrepDeploymentsSecretsConfig

class TestSemgrepDeploymentsSecretsConfig(unittest.TestCase):
    """SemgrepDeploymentsSecretsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SemgrepDeploymentsSecretsConfig:
        """Test SemgrepDeploymentsSecretsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SemgrepDeploymentsSecretsConfig`
        """
        model = SemgrepDeploymentsSecretsConfig()
        if include_optional:
            return SemgrepDeploymentsSecretsConfig(
                api_key = ''
            )
        else:
            return SemgrepDeploymentsSecretsConfig(
        )
        """

    def testSemgrepDeploymentsSecretsConfig(self):
        """Test SemgrepDeploymentsSecretsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
