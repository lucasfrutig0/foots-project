export const StandingTableGroup = () => {
  return (
    <div className="shadow-lg border border-nord-frost-gray-blue rounded-md">
      <h2
        className="
        py-1 px-2
        bg-gradient-to-bl from-nord-frost-green to-nord-frost-dark-blue
        text-nord-polar-night-900
        font-semibold
        uppercase
      "
      >
        grupo a
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full" role="table">
          <thead className="text-center">
            <tr>
              <th></th>
              <th>T</th>
              <th>J</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>GP</th>
              <th>GS</th>
              <th>SG</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-center">1</th>
              <td className="text-center">Arsenal</td>
              <td className="text-center">21</td>
              <td className="text-center">12</td>
              <td className="text-center">2</td>
              <td className="text-center">7</td>
              <td className="text-center">2</td>
              <td className="text-center">7</td>
              <td className="text-center">22</td>
              <td className="text-center">52</td>
            </tr>
            <tr>
              <th className="text-center">2</th>
              <td className="text-center">Arsenal</td>
              <td className="text-center">21</td>
              <td className="text-center">12</td>
              <td className="text-center">2</td>
              <td className="text-center">7</td>
              <td className="text-center">2</td>
              <td className="text-center">7</td>
              <td className="text-center">22</td>
              <td className="text-center">52</td>
            </tr>
            <tr>
              <th className="text-center">3</th>
              <td className="text-center">Arsenal</td>
              <td className="text-center">21</td>
              <td className="text-center">12</td>
              <td className="text-center">2</td>
              <td className="text-center">7</td>
              <td className="text-center">2</td>
              <td className="text-center">7</td>
              <td className="text-center">22</td>
              <td className="text-center">52</td>
            </tr>
            <tr>
              <th className="text-center">4</th>
              <td className="text-center">Arsenal</td>
              <td className="text-center">21</td>
              <td className="text-center">12</td>
              <td className="text-center">2</td>
              <td className="text-center">7</td>
              <td className="text-center">2</td>
              <td className="text-center">7</td>
              <td className="text-center">22</td>
              <td className="text-center">52</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="text-center">
              <th></th>
              <th>T</th>
              <th>J</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>GP</th>
              <th>GS</th>
              <th>SG</th>
              <th>PTS</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
