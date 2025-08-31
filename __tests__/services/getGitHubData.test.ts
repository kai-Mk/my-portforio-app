// __tests__/services/getGitHubData.test.ts
import { getGitHubData } from '@/app/services/getGitHubData';
import { RepoData } from '@/app/types/api';

// fetchをモック
global.fetch = jest.fn();

describe('getGitHubData', () => {
  const mockRepos = ['s-labo', 'finote'];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('正常系: リポジトリデータを返す', async () => {
    // モックレスポンス
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        name: 's-labo',
        language: 'TypeScript',
        description: '複数のチーム単位でタスク管理やスケジュール管理を行うアプリ（作成中）',
        html_url: 'https://github.com/kai-Mk/s-labo',
      }),
    });

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        name: 'finote',
        language: 'TypeScript',
        description: 'Finote（ファイノート） 収支管理アプリ。（作成中）',
        html_url: 'https://github.com/kai-Mk/finote',
      }),
    });

    const result = await getGitHubData(mockRepos);

    const expected: RepoData[] = [
      {
        name: 's-labo',
        language: 'TypeScript',
        description: '複数のチーム単位でタスク管理やスケジュール管理を行うアプリ（作成中）',
        url: 'https://github.com/kai-Mk/s-labo',
      },
      {
        name: 'finote',
        language: 'TypeScript',
        description: 'Finote（ファイノート） 収支管理アプリ。（作成中）',
        url: 'https://github.com/kai-Mk/finote',
      },
    ];

    expect(result).toEqual(expected);
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('s-labo'), expect.any(Object));
  });

  it('異常系: fetchが失敗した場合は空配列を返す', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const result = await getGitHubData(['unknown-repo']);
    expect(result).toEqual([]);
  });

  it('異常系: fetchが例外を投げた場合は空配列を返す', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const result = await getGitHubData(['s-labo']);
    expect(result).toEqual([]);
  });
});
