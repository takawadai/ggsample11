#version 410 core

//デプステクスチャのサンプラ
uniform sampler2DShadow depth;

// ラスタライザから受け取る頂点属性の補間値
in vec4 iamb;                                       // 環境光の反射光強度
in vec4 idiff;                                      // 拡散反射光強度
in vec4 ispec;                                      // 鏡面反射光強度
in vec4 ps;

// フレームバッファに出力するデータ
layout (location = 0) out vec4 fc;                  // フラグメントの色

void main(void)
{
  fc = iamb + (idiff + ispec) * texture(depth, ps.xyz * 0.5 / ps.w + 0.5);
}
